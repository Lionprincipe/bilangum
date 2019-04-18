import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router'
import Header from '../components/Header'

import Footer from '../components/Footer'
import WordsListContainer from '../container/WordsListContainer'

import AddWordContainer from '../container/AddWordContainer'
//import LanguageBox from '../components/LANGUAGES/LanguageBox'
import LanguageBoxContainer from '../container/LanguageBoxContainer'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 3.5em 1em;
`

const HomeScreen = ({ hasPreferedLanguages }) => {
  return hasPreferedLanguages ? (
    <React.Fragment>
      <Header />
      <Main>
        <LanguageBoxContainer />
        <AddWordContainer />
        <WordsListContainer />
      </Main>
      <Footer />
    </React.Fragment>
  ) : (
    <Redirect to="/preferences" />
  )
}
HomeScreen.propTypes = {
  hasPreferedLanguages: PropTypes.bool,
}

export default HomeScreen
