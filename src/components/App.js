import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HomeScreen from '../screens/HomeScreen'
import { inputName, words, preferedLanguages } from '../constants/app'
import reducer from '../reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen
          inputName={inputName}
          words={words}
          preferedLanguages={preferedLanguages}
        />
      </Provider>
    )
  }
}

export default App
