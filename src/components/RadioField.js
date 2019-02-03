import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRadio = styled.label`
  display: inline-block;
  margin: auto 2em;
`
const RadioField = ({ value, text, name, onChange, checked }) => {
  const handleChange = e => {
    const { value } = e.target
    onChange(value)
  }
  return (
    <StyledRadio>
      <input
        type="radio"
        value={value || text}
        name={name}
        onChange={handleChange}
        checked={checked}
      />
      {text}
    </StyledRadio>
  )
}

RadioField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
}

export default RadioField
