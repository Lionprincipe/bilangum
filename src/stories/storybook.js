import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import App from '../components/App'
import PreferencesScreen from '../screens/PreferencesScreen'
import HomeScreen from '../screens/HomeScreen'
import WordCard from '../components/WordCard'

storiesOf('App', module).add('default', () => <App />)
storiesOf('PreferencesScreen', module).add('default', () => (
  <PreferencesScreen />
))
storiesOf('HomeScreen', module).add('default', () => <HomeScreen />)
storiesOf('WordCard', module)
  .add('miniview', () => (
    <WordCard word={{ type: 'noun', language: 'english', word: 'to be' }} />
  ))
  .add('toggled', () => (
    <WordCard
      word={{ type: 'noun', language: 'english', word: 'to be' }}
      open={true}
    />
  ))
