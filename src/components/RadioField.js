import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRadio = styled.label`
  display: inline-block;
  margin: auto 2em;
`
const RadioField = ({ text, name, onChange }) => {
  const handleChange = e => {
    const { value } = e.target
    onChange({ [name]: value })
  }
  return (
    <StyledRadio>
      <input type="radio" name={name} onChange={handleChange} /> {text}
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
  onChange: PropTypes.func,
}

export default RadioField
