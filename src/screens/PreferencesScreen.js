import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import UserProfileCard from '../components/UserProfileCard'
import EthnicLanguageSelection from '../components/EthnicLanguageSelection'
import ReferenceLanguageSelection from '../components/ReferenceLanguageSelection'
import Button from '../components/Button'
const Wrapper = styled.div`
  border: 1px solid black;
  max-width: 414px;
  max-height: 736px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position : relative;
`

const PreferencesScreen = props => {
  return (
    <Wrapper>
      <UserProfileCard />
      <EthnicLanguageSelection />
      <ReferenceLanguageSelection />
      <Button>Continue</Button>
    </Wrapper>
  )
}

PreferencesScreen.propTypes = {}

export default PreferencesScreen
