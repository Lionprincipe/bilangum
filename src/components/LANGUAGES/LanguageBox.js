import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import InputField from '../UI/InputField'
import Button from '../UI/Button'
import Icon from '../UI/Icon'
import Toggle from '../../container/Toggle'

const Wrapper = styled.section`
  margin-top: 3em;
  min-height: 3em;
  width: 90%;
  margin-bottom: 0.4em;
  padding: 0.5em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`

const StyleButton = styled.button`
  background: transparent;
  font-weight: 600;
  border: none;
  margin: 0 0.5%;
  width: 38%;
  outline: none;
  min-height: 43px;
  text-transform: uppercase;
  ${props =>
    props.selected &&
    css`
      border-bottom: solid 3px #000;
    `}

  &:active {
    border-bottom: solid 3px #000;
    background: #eee;
  }
`

export default class LanguageBox extends Component {
  static propTypes = {
    languages: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func.isRequired,
  }
  state = {
    isSearching: false,
    selectedLanguage: 'ALL',
  }

  toggleSearch = () => {
    const { isSearching } = this.state
    this.setState({ isSearching: !isSearching })
  }
  toggleSelectedLanguageHandler = (selection, language) => {
    this.setState({ selectedLanguage: selection })
    this.props.onChange(language)
  }
  render() {
    return (
      <Wrapper>
        <Toggle
          toggle={(isToggled, toggleMe) => (
            <React.Fragment>
              <nav>
                {this.renderButtons()}
                <Button onClick={toggleMe}>
                  <Icon name={'search'} />
                </Button>
              </nav>
              {isToggled && (
                <InputField
                  type="search"
                  name="searchlang"
                  placeholder="search"
                  value=""
                />
              )}
            </React.Fragment>
          )}
        />
      </Wrapper>
    )
  }

  renderButtons() {
    const { languages } = this.props
    const { selectedLanguage } = this.state
    return (
      <React.Fragment>
        <StyleButton
          selected={selectedLanguage === 'ALL'}
          onClick={() => this.toggleSelectedLanguageHandler('ALL', languages)}
        >
          ALL
        </StyleButton>
        {languages &&
          languages.map(language => {
            const { languageId, language: text } = language
            return (
              <StyleButton
                key={languageId}
                selected={selectedLanguage === languageId}
                onClick={() =>
                  this.toggleSelectedLanguageHandler(languageId, [language])
                }
              >
                {text}
              </StyleButton>
            )
          })}
      </React.Fragment>
    )
  }
}
