import React from 'react'
import PropTypes from 'prop-types'

import SearchField from './SearchField'

const EthnicLanguageSelection = ({ placeholder }) => {
  return <SearchField placeholder="african language" />
}

EthnicLanguageSelection.propTypes = {
  placeholder: PropTypes.string,
}

export default EthnicLanguageSelection
