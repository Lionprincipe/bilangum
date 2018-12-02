import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../components/Header'
import SearchField from '../components/SearchField'
import ToggleSearchLanguage from '../components/ToggleSearchLanguage'
import Footer from '../components/Footer'
import WordList from '../components/WordList'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20% 1em 10%;
`

const HomeScreen = props => {
  const preferedLanguages = { ethnic: 'afro', reference: 'english' }
  const wordList = [
    { type: 'noun', language: 'english', word: 'to be' },
    { type: 'noun', language: 'english', word: 'hello' },
    { type: 'noun', language: 'english', word: 'house' },
    { type: 'noun', language: 'english', word: 'to do' },
    { type: 'noun', language: 'english', word: 'fish' },
    { type: 'noun', language: 'english', word: 'cat' },
    { type: 'noun', language: 'english', word: 'to be' },
    { type: 'noun', language: 'english', word: 'hello' },
    { type: 'noun', language: 'english', word: 'house' },
    { type: 'noun', language: 'english', word: 'to do' },
    { type: 'noun', language: 'english', word: 'fish' },
    { type: 'noun', language: 'english', word: 'cat' },
  ]
  const name = 'language'
  return (
    <React.Fragment>
      <Header />
      <Main>
        <SearchField />
        <ToggleSearchLanguage
          preferedLanguages={preferedLanguages}
          name={name}
        />
        <WordList wordList={wordList} />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

HomeScreen.propTypes = {}

export default HomeScreen
