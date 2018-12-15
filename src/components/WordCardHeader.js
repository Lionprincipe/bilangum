import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BtnTray from './BtnTray'
import { wordHeaderLeftBtns, wordHeaderRightBtns } from '../constants/btnList'
import InputField from './InputField'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2em;
`
const WordTray = styled.div`
  padding: 0.5em;
  flex-grow: 1;
  font-size: 1.2em;
`

export default class WordCardHeader extends Component {
  static propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
  }

  state = { edit: false }

  handleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  render() {
    const { title, onClick, onUpdate, onDelete } = this.props
    const { edit } = this.state

    const btnsRight = [
      { ...wordHeaderRightBtns[edit ? 3 : 4], onClick: this.handleEdit },
      { ...wordHeaderRightBtns[5], onClick: onDelete },
    ]
    const btnsLeft = [{ ...wordHeaderLeftBtns[0], onClick: onClick }]
    const onSubmit = inputValue => {
      this.handleEdit()
      onUpdate('word', inputValue)
    }
    return (
      <Wrapper>
        <BtnTray btnList={btnsLeft} />
        {edit ? (
          <InputField
            name={'word'}
            placeholder={title}
            value={title}
            onSubmit={onSubmit}
          />
        ) : (
          <WordTray onClick={onClick}>{title}</WordTray>
        )}
        <BtnTray btnList={btnsRight} />
      </Wrapper>
    )
  }
}
