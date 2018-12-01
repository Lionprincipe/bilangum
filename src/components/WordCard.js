import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from './Icon'
const Wrapper = styled.li`
  list-style-type: none;
  padding: 1em;
  display: flex;
  align-items: center;
`
const WordCard = ({ word }) => {
  return (
    <Wrapper>
      <Icon type="arrow" />
      {word}
    </Wrapper>
  )
}

WordCard.propTypes = {
  word: PropTypes.string,
}

export default WordCard
