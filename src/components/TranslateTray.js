import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BtnTrayContainer from '../container/BtnTrayContainer'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.2em;
  border-top: solid #eee 0.5px;
`
const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2em;
`
const WordTray = styled.div`
  padding: 0.5em;
  flex-grow: 1;
  font-size: 1.2em;
`

const DotsTray = styled.ol`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
`

const Dot = styled.li`
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 0 8px;
  background: ${props => (props.color === 'true' ? '#000' : '#b3b5b7')};
  border-radius: 50%;
  cursor: pointer;
`

export default class TranslateTray extends Component {
  static propTypes = { translationList: PropTypes.array }

  state = { currIndex: 0 }

  setStateHandler = (name, value) => {
    this.setState({ [name]: value })
  }

  handleNext = () => {
    const { translationList } = this.props
    const { currIndex } = this.state
    const nextIndex =
      translationList.length - 1 > currIndex ? this.state.currIndex + 1 : 0
    this.setStateHandler('currIndex', nextIndex)
  }

  handlePrevious = () => {
    this.state.currIndex > 0 &&
      this.setStateHandler('currIndex', this.state.currIndex - 1)
    const { translationList } = this.props
    const { currIndex } = this.state
    const nextIndex =
      currIndex > 0 ? this.state.currIndex - 1 : translationList.length - 1
    this.setStateHandler('currIndex', nextIndex)
  }

  render() {
    return (
      <Wrapper>
        <BtnTrayContainer
          name={'translationLeft'}
          status={'default'}
          onClickLeft={this.handlePrevious}
        />
        <SubWrapper>
          {this.renderTranslationElement()}
          {this.renderDotsEl()}
        </SubWrapper>
        <BtnTrayContainer
          name={'translationRight'}
          status={'default'}
          onClickRight={this.handleNext}
        />
      </Wrapper>
    )
  }

  renderTranslationElement() {
    const { translationList } = this.props
    const { currIndex } = this.state
    if (translationList) {
      return <WordTray> {translationList[currIndex]}</WordTray>
    }
  }

  renderDotsEl() {
    const length = this.props.translationList.length || 0
    return length && <DotsTray>{this.renderDot(length)}</DotsTray>
  }

  renderDot(length) {
    return (
      length &&
      [...Array(length)].map((_, index) => (
        <Dot key={index} color={`${index === this.state.currIndex}`} />
      ))
    )
  }
}
