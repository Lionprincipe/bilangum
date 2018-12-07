import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object,
} from '@storybook/addon-knobs'

import App from '../components/App'
import PreferencesScreen from '../screens/PreferencesScreen'
import HomeScreen from '../screens/HomeScreen'
import WordCard from '../components/WordCard'
import Icon from '../components/Icon'

storiesOf('App', module).add('default', () => <App />)

storiesOf('PreferencesScreen', module).add('default', () => (
  <PreferencesScreen />
))

storiesOf('HomeScreen', module).add('default', () => <HomeScreen />)

storiesOf('WordCard', module)
  .addDecorator(withKnobs)
  .add('miniview', () => (
    <WordCard word={{ type: 'noun', language: 'english', word: 'to be' }} />
  ))
  .add('toggled', () => (
    <WordCard
      word={object('word', {
        type: 'noun',
        language: 'english',
        word: 'to be',
      })}
      open={boolean('open', true)}
    />
  ))

storiesOf('icon', module)
  .addDecorator(withKnobs)
  .add('default', () => <Icon type="arrow" />)
  .add('with type', () => (
    <Icon type={array('type', [('arrow', 'pencil', 'home', 'plus')])} />
  ))
