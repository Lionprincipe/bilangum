import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router'
import Header from '../components/Header'
import SearchField from '../components/UI/SearchField'
import Footer from '../components/Footer'
import WordsListContainer from '../container/WordsListContainer'
import ToggleSearchLanguagesContainer from '../container/ToggleSearchLanguagesContainer'
import AddWordContainer from '../container/AddWordContainer'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 3.5em 1em;
`

const HomeScreen = ({ hasPreferedLanguages }) => {
  console.log(hasPreferedLanguages)
  return hasPreferedLanguages ? (
    <React.Fragment>
      <Header />
      <Main>
        <SearchField />
        <ToggleSearchLanguagesContainer />
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
