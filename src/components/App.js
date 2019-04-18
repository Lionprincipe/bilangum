import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducer/reducer'
import thunk from 'redux-thunk'
import HomeScreenContainer from '../container/HomeScreenContainer'
import { saveToLocalStorage } from '../middlewares'
import PreferenceScreenContainer from '../container/PreferenceScreenContainer'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, saveToLocalStorage),
    window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : _ => _
  )
)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Route exact path="/" component={HomeScreenContainer} />
          <Route path="/preferences" component={PreferenceScreenContainer} />
        </Provider>
      </Router>
    )
  }
}

export default App
