import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BtnTrayContainer from '../container/BtnTrayContainer'
import { updateList } from '../utils'
import Translation from './Translation'
import TranslationDots from './TranslationDots'
import TranslationView from './TranslationView'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 0.2em;
  border-bottom: solid #eee 0.5px;
`
const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2em;
`

export default class TranslateTray extends Component {
  static propTypes = {
    translationList: PropTypes.array,
    onSave: PropTypes.func,
  }

  state = { currIndex: 0, expendCurrent: false }

  setStateHandler = (name, value) => {
    this.setState({ [name]: value })
  }

  setCurrIndex = index => {
    this.setStateHandler('currIndex', index)
  }

  handleNext = () => {
    const { translationList } = this.props
    const { currIndex } = this.state
    const nextIndex =
      translationList && translationList.length > currIndex + 1
        ? currIndex + 1
        : 0
    this.setStateHandler('currIndex', nextIndex)
  }

  handlePrevious = () => {
    const { translationList } = this.props
    const { currIndex } = this.state
    const nextIndex =
      currIndex > 0
        ? currIndex - 1
        : (translationList && translationList.length - 1) || 0
    this.setCurrIndex(nextIndex)
  }

  toggleShowSelectedHandler = () => {
    const { expendCurrent } = this.state
    this.setStateHandler('expendCurrent', !expendCurrent)
  }

  deleteTranslationHandler = event => {
    event.stopPropagation()
    const { currIndex } = this.state
    const { translationList, onSave } = this.props
    const newList = updateList(translationList, currIndex)
    const newCurrIndex =
      newList && newList.length > currIndex + 1 ? currIndex + 1 : 0
    typeof newList !== 'undefined' && onSave(newList)
    this.setCurrIndex(newCurrIndex)
  }

  render() {
    const { currIndex, expendCurrent } = this.state
    const { translationList } = this.props
    const isTranslated =
      this.props.translationList && translationList.length > 0
    const currText = translationList[currIndex]
    const count = (translationList && translationList.length) || 0

    return (
      isTranslated && (
        <Wrapper>
          <BtnTrayContainer
            name={'translationLeft'}
            onClickLeft={this.handlePrevious}
          />
          <SubWrapper>
            <Translation
              text={currText}
              onClick={this.toggleShowSelectedHandler}
              onDelete={this.deleteTranslationHandler}
            />
            <TranslationDots
              count={count}
              selected={currIndex}
              onDotClick={this.setCurrIndex}
            />
          </SubWrapper>
          <BtnTrayContainer
            name={'translationRight'}
            onClickRight={this.handleNext}
          />
          <TranslationView
            isOpen={expendCurrent}
            onClose={this.toggleShowSelectedHandler}
            wordIndex={currIndex}
          />
        </Wrapper>
      )
    )
  }
}
