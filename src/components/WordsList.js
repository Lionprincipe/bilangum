import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import WordCard from './WordCard'
const Wrapper = styled.ul`
  padding: 0;
  width: 95%;
  margin: 1em auto;
`
const WordList = ({ words }) => {
  const listElement = words.map((el, index) => (
    <WordCard key={index} word={el} open={true} />
  ))
  return <Wrapper>{listElement}</Wrapper>
}

WordList.propTypes = {
  words: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
}

export default WordList
