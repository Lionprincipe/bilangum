import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WordCardBody from './WordCardBody'
import WordCardFooter from './WordCardFooter'
import TranslateTray from './TranslateTray'
import WordCardHeaderContainer from '../container/WordCardHeaderContainer'

const Wrapper = styled.li`
  margin-bottom: 0.4em;
  list-style-type: none;
  padding: 0.5em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

export default class WordCard extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    word: PropTypes.object,
    onUpdate: PropTypes.func,
    toggleOpenMode: PropTypes.func,
    wordId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }

  render() {
    const {
      isOpen,
      toggleOpenMode,
      onUpdate,
      wordId,
      word: { word, translation, ...others },
    } = this.props
    return (
      <Wrapper>
        <WordCardHeaderContainer
          name={'word'}
          title={word}
          onClick={toggleOpenMode}
          onUpdate={onUpdate}
          open={isOpen}
          wordId={wordId}
        />
        {isOpen && (
          <React.Fragment>
            <WordCardBody
              wordId={wordId}
              properties={others}
              onUpdate={onUpdate}
            >
              {translation && <TranslateTray translationList={translation} />}
            </WordCardBody>
            <WordCardFooter />
          </React.Fragment>
        )}
      </Wrapper>
    )
  }
}
