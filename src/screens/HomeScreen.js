import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../components/Header'
import SearchField from '../components/SearchField'
import ToggleSearchLanguage from '../components/ToggleSearchLanguage'
import Footer from '../components/Footer'
import WordList from '../components/WordList'
const Wrapper = styled.div`
  border: 1px solid black;
  max-width: 414px;
  max-height: 736px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const HomeScreen = props => {
  const preferedLanguages = { ethnic: 'afro', reference: 'english' }
  const wordList = ['to be', 'hello', 'house', 'to do', 'fish', 'cat']
  return (
    <Wrapper>
      <Header>dance</Header>
      <main>
        <SearchField />
        <ToggleSearchLanguage preferedLanguages={preferedLanguages} />
        <WordList wordList={wordList} />
      </main>
      <Footer />
    </Wrapper>
  )
}

HomeScreen.propTypes = {}

export default HomeScreen
