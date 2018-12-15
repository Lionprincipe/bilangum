import React, { Component } from 'react'
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

export default class WordCard extends Component {
  static propTypes = {
    word: PropTypes.object,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    index: PropTypes.number,
  }
  state = {
    open: false,
  }
  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    })
  }
  render() {
    const {
      index,
      onUpdate,
      onDelete,
      word: { word, translation, ...others },
    } = this.props
    return (
      <Wrapper>
        <WordCardHeader
          title={word}
          onClick={this.toggleOpen}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
        {this.state.open && (
          <React.Fragment>
            <WordCardBody
              wordId={index}
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
