import React from 'react'
import styled from 'styled-components'

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

const HomeScreen = () => {
  return (
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
  )
}

export default HomeScreen
