import React from 'react'
import PropTypes from 'prop-types'

import AutocompleteContainer from '../container/AutocompleteContainer'

const EthnicLanguageSelection = ({ value, name, placeholder }) => {
  return (
    <AutocompleteContainer
      name={name}
      value={value || ''}
      placeholder={placeholder}
      onSubmit={console.log}
    />
  )
}

EthnicLanguageSelection.propTypes = {
  placeholder: PropTypes.string,
}

export default EthnicLanguageSelection
