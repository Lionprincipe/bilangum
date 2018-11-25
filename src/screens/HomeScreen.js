import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UserProfileCard from '../components/UserProfileCard'
import EthnicLanguageSelection from '../components/EthnicLanguageSelection'
import ReferenceLanguageSelection from '../components/ReferenceLanguageSelection'
import Header from '../components/Header'
import SearchField from '../components/SearchField'
import ToggleSearchLanguage from '../components/ToggleSearchLanguage'
import Footer from '../components/Footer'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const HomeScreen = props => {
  const preferedLanguages = { ethnic: 'afro', reference: 'english' }
  return (
    <Wrapper>
      <Header>dance</Header>
      <main>
        <SearchField />
        <ToggleSearchLanguage preferedLanguages={preferedLanguages} />
      </main>
      <Footer />
    </Wrapper>
  )
}

HomeScreen.propTypes = {}

export default HomeScreen
