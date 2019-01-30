import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRadio = styled.label`
  display: inline-block;
  margin: auto 2em;
`
const RadioField = ({ text, name, onChange, checked }) => {
  const handleChange = e => {
    console.log('cnhange')
    const { value } = e.target
    onChange(value)
  }
  return (
    <StyledRadio>
      <input
        type="radio"
        value={text}
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
  text: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  onChange: PropTypes.func,
}

export default RadioField
