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
      word: { word, translation, ...others },
    } = this.props
    return (
      <Wrapper>
        <WordCardHeader title={word} onClick={this.toggleOpen} />
        {this.state.open && (
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
}
