import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WordCard from './WordCard'
const Wrapper = styled.ul`
  padding: 0;
  width: 95%;
  margin: 1em auto;
`
const WordList = ({ wordList }) => {
  const listElement = wordList.map((el, index) => (
    <WordCard key={index} word={el} />
  ))
  return <Wrapper>{listElement}</Wrapper>
}

WordList.propTypes = {
  wordList: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
}

export default WordList
