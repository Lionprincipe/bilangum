import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WordCardContainer from '../container/WordCardContainer'
const Wrapper = styled.ul`
  padding: 0;
  width: 95%;
  margin: 1em auto;
`
const WordList = ({ words }) => {
  const listElement = words.map((el, index) => (
    <WordCardContainer key={index} word={el} wordId={index} />
  ))
  return <Wrapper>{listElement}</Wrapper>
}

WordList.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
}

export default WordList
