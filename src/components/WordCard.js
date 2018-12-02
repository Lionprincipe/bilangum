import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WordCardHeader from './WordCardHeader'
import WordCardBody from './WordCardBody'
import WordCardFooter from './WordCardFooter'
const Wrapper = styled.li`
  margin-bottom: 0.2em;
  list-style-type: none;
`

const WordCard = ({ word: { word, ...others }, open }) => {
  return (
    <Wrapper>
      <WordCardHeader title={word} />
      {open && (
        <React.Fragment>
          <WordCardBody />
          <WordCardFooter />
        </React.Fragment>
      )}
    </Wrapper>
  )
}

WordCard.propTypes = {
  word: PropTypes.object,
  open: PropTypes.bool,
}

export default WordCard
