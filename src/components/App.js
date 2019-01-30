import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../reducer/reducer'
import HomeScreen from '../screens/HomeScreen'
import PreferencesScreen from '../screens/PreferencesScreen'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PreferencesScreen />
      </Provider>
    )
  }
}

export default App
