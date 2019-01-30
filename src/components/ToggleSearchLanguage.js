import React from 'react'
import PropTypes from 'prop-types'
import RadioField from './RadioField'

const ToggleSearchLanguage = ({
  name,
  preferedLanguages: { ethnic, reference },
}) => {
  return (
    <div>
      <RadioField text={reference} name={name} />
      <RadioField text={ethnic||'ero'} name={name} />
    </div>
  )
}

ToggleSearchLanguage.propTypes = {
  name: PropTypes.string,
  preferedLanguages: PropTypes.object,
}

export default ToggleSearchLanguage
