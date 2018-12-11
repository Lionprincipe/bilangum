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
import Footer from '../components/Footer'
import Header from '../components/Header'

import { inputName, words, preferedLanguages } from '../constants/initialState'

storiesOf('App', module).add('default', () => <App />)

storiesOf('PreferencesScreen', module).add('default', () => (
  <PreferencesScreen />
))

storiesOf('HomeScreen', module).add('default', () => (
  <HomeScreen
    inputName={inputName}
    words={words}
    preferedLanguages={preferedLanguages}
  />
))

storiesOf('WordCard', module)
  .addDecorator(withKnobs)
  .add('miniview', () => (
    <WordCard word={{ type: 'noun', language: 'english', word: 'to be' }} />
  ))
  .add('toggled without translation', () => (
    <WordCard
      word={object('word', {
        type: 'noun',
        language: 'english',
        word: 'to be',
      })}
      open={boolean('open', true)}
    />
  ))
  .add('toggled with translation', () => (
    <WordCard
      word={object('word', {
        type: 'noun',
        language: 'english',
        word: 'to be',
        translation: ['mbolo', 'mboloua', 'mbolwa'],
      })}
      open={boolean('open', true)}
    />
  ))

storiesOf('icon', module)
  .addDecorator(withKnobs)
  .add('default', () => <Icon type="arrow" />)

storiesOf('Footer', module).add('default', () => <Footer type="arrow" />)
storiesOf('Header', module).add('default', () => <Header type="arrow" />)
