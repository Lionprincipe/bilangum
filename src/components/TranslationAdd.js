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

const TranslationAdd = ({
  suggestions,
  wordCopy,
  originalWord,
  onSave,
  name,
}) => {
  const { word, translations } = originalWord
  const text = `Add a  translation for :${word}`
  return (
    <Wrapper>
      <AutocompleteContainer
        name={name}
        value={''}
        list={suggestions}
        mainAttribut="word"
        attributs={['word', 'wordId']}
        placeholder={text}
        onSubmit={value => onSave(wordCopy, value, translations || [])}
      />
    </Wrapper>
  )
}

TranslationAdd.propTypes = {
  word: PropTypes.object,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onSave: PropTypes.func,
  suggestions: PropTypes.array,
}

export default TranslationAdd
