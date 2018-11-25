import React from 'react'
import PropTypes from 'prop-types'
import RadioField from './RadioField'

const ReferenceLanguageSelection = props => {
  return (
    <div>
      <RadioField name="referenceLanguage" text="English" />
      <RadioField name="referenceLanguage" text="French" />
    </div>
  )
}

ReferenceLanguageSelection.propTypes = {}

export default ReferenceLanguageSelection
