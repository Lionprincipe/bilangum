import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AutocompleteContainer from '../container/AutocompleteContainer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0.2em;
  border-bottom: solid #eee 0.5px;
`

const TranslationAdd = ({ wordCopy, originalWord, onSave, name }) => {
  const { word, translation } = originalWord
  const text = `Add a  translation for :${word}`
  return (
    <Wrapper>
      <AutocompleteContainer
        name={name}
        value={''}
        placeholder={text}
        onSubmit={value =>
          onSave({ ...wordCopy, word: value }, translation || [])
        }
      />
    </Wrapper>
  )
}

TranslationAdd.propTypes = {
  word: PropTypes.object,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onSave: PropTypes.func,
}

export default TranslationAdd
