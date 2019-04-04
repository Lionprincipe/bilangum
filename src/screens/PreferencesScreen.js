import React from 'react'
import styled from 'styled-components'
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
      <Button border={true} width="auto" height="auto" link="/">
        Continue
      </Button>
    </Wrapper>
  )
}

export default PreferencesScreen
