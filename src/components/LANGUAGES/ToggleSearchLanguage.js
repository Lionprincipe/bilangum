import React from 'react'
import PropTypes from 'prop-types'
import RadioField from '../UI/RadioField'

const ToggleSearchLanguage = ({
  name,
  ethnic,
  reference,
  ethnicLanguage,
  referenceLanguage,
  onChange,
  ethnicChecked,
  referenceChecked,
}) => {
  return (
    ethnic &&
    reference && (
      <div>
        <RadioField
          text={reference}
          name={name}
          value={reference}
          onChange={() => onChange(referenceLanguage)}
          checked={referenceChecked}
        />
        <RadioField
          text={ethnic || ''}
          value={ethnic || ''}
          name={name}
          onChange={() => onChange(ethnicLanguage)}
          checked={ethnicChecked}
        />
      </div>
    )
  )
}

ToggleSearchLanguage.propTypes = {
  name: PropTypes.string,
  preferedLanguages: PropTypes.object,
}

export default ToggleSearchLanguage
