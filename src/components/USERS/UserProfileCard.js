import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Icon from '../UI/Icon'

const StyledImg = styled.div`
  margin-top: 6em;
  border-radius: 50%;
  height: 8em;
  width: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledName = styled.div`
  text-align: center;
  margin-top: 1.5em;
`
const UserProfileCard = props => {
  return (
    <div>
      <StyledImg>
        <Icon type="profile" width="100%" height="100%" />
      </StyledImg>
      <StyledName>user Name</StyledName>
    </div>
  )
}

UserProfileCard.propTypes = {}

export default UserProfileCard
