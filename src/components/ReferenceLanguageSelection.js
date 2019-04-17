import React from 'react'
import PropTypes from 'prop-types'
import RadioField from './RadioField'
import uuid4 from 'uuid/v4'

const ReferenceLanguageSelection = ({
  name,
  referenceLanguagesList,
  onChange,
}) => {
  const elements = referenceLanguagesList.map(el => (
    <RadioField key={uuid4()} name={name} text={el} onChange={onChange} />
  ))
  return <div>{elements}</div>
}

ReferenceLanguageSelection.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
}

export default ReferenceLanguageSelection
