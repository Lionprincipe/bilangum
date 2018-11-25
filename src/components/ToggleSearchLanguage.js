import React from 'react'
import PropTypes from 'prop-types'
import RadioField from './RadioField'

const ToggleSearchLanguage = ({ preferedLanguages: { ethnic, reference } }) => {
  return (
    <div>
      <RadioField text={reference} />
      <RadioField text={ethnic} />
    </div>
  )
}

ToggleSearchLanguage.propTypes = {
  preferedLanguages: PropTypes.object,
}

export default ToggleSearchLanguage
