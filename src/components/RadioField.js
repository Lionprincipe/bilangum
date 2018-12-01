import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRadio = styled.label`
  display: inline-block;
  margin: auto 2em;
`
const RadioField = ({ text, name }) => {
  return (
    <StyledRadio>
      <input type="radio" name={name} /> {text}
    </StyledRadio>
  )
}

RadioField.propTypes = {
  name: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
}

export default RadioField
