import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InputField from './InputField'
import Button from './Button'
import ButtonAdd from './ButtonAdd'
import Modal from './Modal'

const Wrapper = styled.form`
  margin: 0.4em;
  padding: 2em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: white;
`

export default class AddWord extends Component {
  static propTypes = {
    newWordProps: PropTypes.array,
    onSave: PropTypes.func,
  }
  state = {}

  handleInput = name => value => {
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { word } = this.state
    word && this.props.onSave(this.state)
    word && this.setState({})
    this.props.toggleOpen()
  }

  render() {
    const { isAdding, toggleOpen } = this.props
    return isAdding ? (
      <Modal onClose={toggleOpen}>
        <Wrapper onSubmit={this.handleSubmit}>
          {this.createElements()}
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Wrapper>
      </Modal>
    ) : (
      <ButtonAdd onClick={toggleOpen} />
    )
  }

  createElements = () =>
    this.props.newWordProps.map((el, key) => (
      <InputField
        key={key}
        name={el}
        value={''}
        placeholder={el}
        onSubmit={this.handleInput(el)}
        onBlur={this.handleInput(el)}
      />
    ))
}
