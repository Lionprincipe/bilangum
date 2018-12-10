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
  margin: 3.5em 1em;
`

const HomeScreen = ({ words, inputName, preferedLanguages }) => {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <SearchField />
        <ToggleSearchLanguage
          preferedLanguages={preferedLanguages}
          name={inputName}
        />
        <WordList wordList={words} />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

HomeScreen.propTypes = {
  words: PropTypes.array,
  preferedLanguages: PropTypes.object,
  inputName: PropTypes.string,
}

export default HomeScreen
