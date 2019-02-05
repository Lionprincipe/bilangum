import React from 'react'
import PropTypes from 'prop-types'
import RadioField from '../UI/RadioField'

const ReferenceLanguageSelection = ({
  name,
  referenceLanguages,
  onChange,
  currReferenceLanguageId,
}) => {
  const elements = referenceLanguages.map(({ languageId, language }) => (
    <RadioField
      key={languageId}
      name={name}
      value={languageId}
      text={language}
      onChange={() => onChange({ languageId, language })}
      checked={currReferenceLanguageId === languageId}
    />
  ))
  return <div>{elements}</div>
}

ReferenceLanguageSelection.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
}

export default ReferenceLanguageSelection
