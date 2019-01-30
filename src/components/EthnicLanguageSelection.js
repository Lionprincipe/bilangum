import React from 'react'
import PropTypes from 'prop-types'

import AutocompleteContainer from '../container/AutocompleteContainer'

const EthnicLanguageSelection = ({
  ethnicLanguage,
  name,
  placeholder,
  onSubmit,
}) => {
  return (
    <AutocompleteContainer
      collection={'languages'}
      attributs={['name']}
      name={name}
      value={ethnicLanguage}
      placeholder={placeholder}
      onSubmit={onSubmit}
    />
  )
}

EthnicLanguageSelection.propTypes = {
  placeholder: PropTypes.string,
}

export default EthnicLanguageSelection
