import React from 'react'
import PropTypes from 'prop-types'
import RadioField from './RadioField'

const ReferenceLanguageSelection = ({ name, text }) => {
  return (
    <div>
      <RadioField name="referenceLanguage" text="English" />
      <RadioField name="referenceLanguage" text="French" />
    </div>
  )
}

ReferenceLanguageSelection.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
}

export default ReferenceLanguageSelection
