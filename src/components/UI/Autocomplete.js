import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputField from './InputField'

const InputStyled = styled.div`
  position: relative;
  font-weight: 300;
  border: none;
  outline: none;
  color: #666;
  width: 100%;
`
const Wrapper = styled.div`
  border: solid #eee 0.5px;
  background: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.24);
  border-radius: 3px;
  font-size: 1em;
  padding: 2%;
`
const SubWrapper = styled.ul`
  list-style: none;
  padding-left: 0;
  min-height: 40px;
  max-height: 200px;
  overflow: scroll;
  z-index: 99;
`
const StyledSuggestion = styled.li`
  cursor: pointer;
  transition: all 0.2s;
  list-style-type: none;
  min-width: 100px;
  margin: 0 0.6em;
  padding: 0.3em;
  border-bottom: solid #eee 0.5px;
`

export default class Autocomplete extends Component {
  static propTypes = {
    suggestions: PropTypes.array,
  }
  state = { suggestions: [], selected: null }

  handleChange = e => {
    const { value } = e.target
    let { suggestions, mainAttribut } = this.props
    if (suggestions && suggestions.length > 0) {
      suggestions = suggestions.filter(el => {
        return (
          typeof el[mainAttribut] === 'string' &&
          el[mainAttribut].toLowerCase().startsWith(value.toLowerCase())
        )
      })
      this.setState({ suggestions, selected: { [mainAttribut]: value } })
    }
  }

  handleSelection = suggestion => {
    suggestion && this.setState({ selected: suggestion })
    this.inputRef.focus()
  }

  clearState = () => {
    this.setState({ suggestions: [], selected: null })
  }

  handleSubmit = inputValue => {
    const { onSubmit, mainAttribut } = this.props
    const { selected } = this.state
    onSubmit && onSubmit(selected || { [mainAttribut]: inputValue })
    this.clearState()
  }

  handleBlur = e => {
    const { handleBlur } = this.props
    handleBlur && handleBlur(e)
  }

  render() {
    const { name, placeholder, mainAttribut } = this.props
    const { suggestions, selected } = this.state
    const text = (selected && selected[mainAttribut]) || ''
    return (
      <Wrapper>
        <InputStyled>
          <InputField
            inputRef={input => {
              this.inputRef = input
            }}
            name={name}
            value={text}
            onChange={this.handleChange}
            onFocus={this.handleChange}
            placeholder={placeholder}
            onSubmit={this.handleSubmit}
            onBlur={this.handleBlur}
            autoComplete="off"
          />
        </InputStyled>
        {suggestions.length > 0 && (
          <SubWrapper>
            {this.renderSuggestions(suggestions, mainAttribut)}
          </SubWrapper>
        )}
      </Wrapper>
    )
  }

  renderSuggestions(suggestions, mainAttribut) {
    return suggestions.map((el, index) => (
      <StyledSuggestion key={index} onClick={() => this.handleSelection(el)}>
        {el[mainAttribut]}
      </StyledSuggestion>
    ))
  }
}
