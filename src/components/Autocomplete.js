import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputField from './InputField'

const InputStyled = styled.div`
  padding: 10px 10px;
  font-weight: 300;
  border: none;
  outline: none;
  color: #666;
`
const Wrapper = styled.div`
  position: relative;
  border: solid #eee 0.5px;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
`
const SubWrapper = styled.ul`
  width: 100%;
  min-height: 40px;
  max-height: 330px;
  overflow: scroll;
  z-index: 99;
`
const StyledSuggestion = styled.li`
  padding: 20px 10px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  list-style-type: none;
`

export default class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.array,
  }
  state = { suggestions: [], selected: '' }

  handleChange = e => {
    const { value } = e.target
    let { suggestions } = this.props
    if (suggestions && suggestions.length > 0) {
      suggestions = suggestions.filter(el =>
        el.toLowerCase().startsWith(value.toLowerCase())
      )
      this.setState({ suggestions, selected: value })
    }
  }

  handleSelection = suggestion => {
    suggestion && this.setState({ selected: suggestion })
  }

  clearState = () => {
    this.setState({ suggestions: [], selected: '' })
  }

  handleSubmit = inputValue => {
    const { onSubmit } = this.props
    onSubmit && onSubmit(inputValue)
    this.clearState()
  }

  handleBlur = e => {
    const { handleBlur } = this.props
    handleBlur && handleBlur(e)
  }

  render() {
    const { name, placeholder } = this.props
    const { suggestions, selected } = this.state
    return (
      <Wrapper>
        <InputStyled>
          <InputField
            name={name}
            value={selected}
            onChange={this.handleChange}
            onFocus={this.handleChange}
            placeholder={placeholder}
            onSubmit={this.handleSubmit}
            onBlur={this.handleBlur}
            autoComplete="off"
          />
        </InputStyled>
        {suggestions.length > 0 && (
          <SubWrapper>{this.renderSuggestions(suggestions)}</SubWrapper>
        )}
      </Wrapper>
    )
  }

  renderSuggestions(suggestions) {
    return suggestions.map((el, index) => (
      <StyledSuggestion key={index} onClick={() => this.handleSelection(el)}>
        {el}
      </StyledSuggestion>
    ))
  }
}
