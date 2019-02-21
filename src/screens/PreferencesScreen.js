import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import UserProfileCard from '../components/USERS/UserProfileCard'
import Button from '../components/UI/Button'
import ReferenceLanguageSelectionContainer from '../container/ReferenceLanguageSelectionContainer'
import EthnicLanguageSelectionContainer from '../container/EthnicLanguageSelectionContainer'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`

const PreferencesScreen = props => {
  return (
    <Wrapper>
      <UserProfileCard />
      <EthnicLanguageSelectionContainer />
      <ReferenceLanguageSelectionContainer />
      <Link to="/">
        <Button border={true} width="auto" height="auto">
          Continue
        </Button>
      </Link>
    </Wrapper>
  )
}

export default PreferencesScreen
