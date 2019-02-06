import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import AutocompleteContainer from '../../container/AutocompleteContainer'
const Wrapper = styled.div`
  padding: 0.2em;
`

const EthnicLanguageSelection = ({
  ethnicLanguage,
  name,
  placeholder,
  onSubmit,
  languages,
}) => {
  return (
    <Wrapper>
      <AutocompleteContainer
        list={languages}
        attributs={['language', 'languageId']}
        name={name}
        value={ethnicLanguage}
        mainAttribut="language"
        placeholder={placeholder}
        onSubmit={onSubmit}
      />
    </Wrapper>
  )
}

EthnicLanguageSelection.propTypes = {
  placeholder: PropTypes.string,
}

export default EthnicLanguageSelection
