import React from 'react'
import PropTypes from 'prop-types'

const WordLanguage = ({ language: { language } }) => {
  return <div>language:{language && language}</div>
}

WordLanguage.propTypes = {}

export default WordLanguage
