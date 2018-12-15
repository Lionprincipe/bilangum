import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InputField from './InputField'
import BtnTrayContainer from '../container/BtnTrayContainer'

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
    open: PropTypes.bool,
  }

  state = { edit: false }

  handleEdit = () => {
    this.setState({ edit: !this.state.edit })
  }

  render() {
    const { title, onClick, onUpdate, open } = this.props
    const { edit } = this.state
    const btnsRight = [edit ? 'cancel' : 'edit', 'delete']

    const btnsLeft = open ? ['toggleDown'] : ['toggleUp']
    const onSubmit = inputValue => {
      this.handleEdit()
      onUpdate('word', inputValue)
    }
    return (
      <Wrapper>
        <BtnTrayContainer btnList={btnsLeft} />
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
        <BtnTrayContainer btnList={btnsRight} />
      </Wrapper>
    )
  }
}
