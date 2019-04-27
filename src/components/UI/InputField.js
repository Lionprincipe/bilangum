import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const StyledInput = styled.input`
  height: 100%;
  width: 90%;
  padding-left: 2%;
  font-size: 1em;
  border: none;
  min-height: 2.5em;
  outline: none;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    const { onChange } = this.props
    this.setState({
      inputValue: value,
    })
    onChange && onChange(e)
  }

  handleFocus = e => {
    const { value } = e.target
    this.setState({
      inputValue: value || this.props.value,
    })
    e.target.select()
  }

  handleSubmit = () => {
    const { inputValue } = this.state
    const { onSubmit } = this.props
    if (inputValue) {
      onSubmit && onSubmit(inputValue)
      this.setState({
        inputValue: '',
      })
    }
  }

  checkForEnterButton = event => {
    if (event.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleKeyUp = event => {
    const { onKeyUp } = this.props
    this.checkForEnterButton(event)
    onKeyUp && onKeyUp(event)
  }

  handleBlur = event => {
    const { value } = event.target
    const { onBlur } = this.props
    value && onBlur && onBlur(value)
  }

  render() {
    const { name, placeholder, value, inputRef, suggested } = this.props
    const { inputValue } = this.state
    const iconName = inputValue && 'checked'
    return (
      <Wrapper>
        <StyledInput
          ref={inputRef}
          name={name}
          type="text"
          placeholder={placeholder || value}
          value={suggested ? value : inputValue}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onKeyUp={this.handleKeyUp}
          onBlur={this.handleBlur}
          autoComplete="off"
        />
        {iconName && (
          <Button onClick={this.handleSubmit}>
            <Icon name={iconName} />
          </Button>
        )}
      </Wrapper>
    )
  }
}
