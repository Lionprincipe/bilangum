import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 2%;
  font-size: 1em;
  border: none;
  min-height: 2.5em;
  border-bottom: 0.5px solid #eee;
`
export default class InputField extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onSubmit: PropTypes.func,
    onBlur: PropTypes.func,
  }

  state = {
    inputValue: '',
  }
  handleChange = e => {
    const { value } = e.target
    this.setState({
      inputValue: value,
    })
  }

  handleFocus = e => {
    const { value } = e.target
    this.setState({
      inputValue: value || this.props.value,
    })
    e.target.select()
  }

  checkForEnterButton = event => {
    const { inputValue } = this.state
    const { onSubmit } = this.props
    if (event.key === 'Enter' && inputValue) {
      onSubmit && onSubmit(inputValue)
      this.setState({
        inputValue: '',
      })
    }
  }
  handleBlur = event => {
    const { value } = event.target
    const { onBlur } = this.props
    value && onBlur && onBlur(value)
  }

  render() {
    const { name, placeholder, value } = this.props
    const { inputValue } = this.state
    return (
      <StyledInput
        name={name}
        placeholder={placeholder || value}
        value={inputValue}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onKeyUp={this.checkForEnterButton}
        onBlur={this.handleBlur}
      />
    )
  }
}
