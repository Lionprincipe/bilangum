import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WordCardHeader from './WordCardHeader'
import WordCardBody from './WordCardBody'
import WordCardFooter from './WordCardFooter'
import TranslateTray from './TranslateTray'
const Wrapper = styled.li`
  margin-bottom: 0.4em;
  list-style-type: none;
  padding: 0.5em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

const WordCard = ({ word: { word, translation, ...others }, open }) => {
  return (
    <Wrapper>
      <WordCardHeader title={word} />
      {open && (
        <React.Fragment>
          <WordCardBody properties={others}>
            {translation && <TranslateTray translationList={translation} />}
          </WordCardBody>
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
