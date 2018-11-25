import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import App from '../components/App'
import PreferencesScreen from '../screens/PreferencesScreen'
import HomeScreen from '../screens/HomeScreen'

storiesOf('App', module).add('default', () => <App />)
storiesOf('PreferencesScreen', module).add('default', () => (
  <PreferencesScreen />
))
storiesOf('HomeScreen', module).add('default', () => <HomeScreen />)
