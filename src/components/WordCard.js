import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WordCardFooter from './WordCardFooter'
import WordCardHeaderContainer from '../container/WordCardHeaderContainer'
import WordCardBodyContainer from '../container/WordCardBodyContainer'
import TranslateTray from './TranslateTray'

const Wrapper = styled.li`
  margin-bottom: 0.4em;
  list-style-type: none;
  padding: 0.5em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

const WordCard = ({
  isOpen,
  wordId,
  word: { word, translation, ...others },
}) => {
  console.log(translation, 'trans')
  return (
    <Wrapper>
      <WordCardHeaderContainer open={isOpen} wordId={wordId} name={'word'} />

      {isOpen && (
        <React.Fragment>
          <WordCardBodyContainer wordId={wordId} properties={others}>
            {translation && translation.length > 0 && (
              <TranslateTray translationList={translation} />
            )}
          </WordCardBodyContainer>
          <WordCardFooter />
        </React.Fragment>
      )}
    </Wrapper>
  )
}

WordCard.propTypes = {
  isOpen: PropTypes.bool,
  word: PropTypes.object,
  onUpdate: PropTypes.func,
  toggleOpenMode: PropTypes.func,
  wordId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WordCard
