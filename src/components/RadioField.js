import React from 'react'
import PropTypes from 'prop-types'

const RadioField = ({ text, name }) => {
  return (
    <label>
      <input type="radio" name={name} /> {text}
    </label>
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
