import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UserProfileCard from '../components/UserProfileCard'
import EthnicLanguageSelection from '../components/EthnicLanguageSelection'
import ReferenceLanguageSelection from '../components/ReferenceLanguageSelection'
import Button from '../components/Button'
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
      <EthnicLanguageSelection />
      <ReferenceLanguageSelection />
      <Button border={true} width="auto" height="auto">
        Continue
      </Button>
    </Wrapper>
  )
}

PreferencesScreen.propTypes = {}

export default PreferencesScreen
