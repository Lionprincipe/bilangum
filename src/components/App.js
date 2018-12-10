import React, { Component } from 'react'
import HomeScreen from '../screens/HomeScreen'
import { inputName, words, preferedLanguages } from '../constants/app'

class App extends Component {
  render() {
    return (
      <HomeScreen
        inputName={inputName}
        words={words}
        preferedLanguages={preferedLanguages}
      />
    )
  }
}

export default App
