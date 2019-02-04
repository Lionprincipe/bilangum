import React from 'react'
import PropTypes from 'prop-types'

import AutocompleteContainer from '../container/AutocompleteContainer'

const EthnicLanguageSelection = ({
  ethnicLanguage,
  name,
  placeholder,
  onSubmit,
  languages
}) => {
  return <AutocompleteContainer list={languages} attributs={['language','languageId']} name={name} value={ethnicLanguage} mainAttribut="language" placeholder={placeholder} onSubmit={onSubmit} />
}

EthnicLanguageSelection.propTypes = {
  placeholder: PropTypes.string,
}

export default EthnicLanguageSelection
