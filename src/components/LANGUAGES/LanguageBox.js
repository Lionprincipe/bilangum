import React, { Component } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import InputField from "../InputField";

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
  }
`;

const StyleButton = styled.button`
  background: transparent;
  border: none;
  margin: 0 0.5%;
  width: 38%;
  outline: none;
  min-height: 43px;

  &:hover,
  .sel {
    border-bottom: solid 3px #4284f3;
  }

  &:hover {
    background: #eee;
  }
`;

export default class LanguageBox extends Component {
  static propTypes = {
    languages: PropTypes.arrayOf(PropTypes.object)
  };
  state = {
    isSearching: false
  };

  toggleSearch = () => {
    const { isSearching } = this.state;
    this.setState({ isSearching: !isSearching });
  };
  render() {
    const { languages } = this.props;
    const { isSearching } = this.state;

    const btns = languages.map(({ id, name }) => (
      <StyleButton key={id}>{name}</StyleButton>
    ));
    return (
      <Wrapper>
        <nav onClick={this.toggleSearch}>{btns}</nav>
        {isSearching && (
          <InputField type="search" name="searchlang" placeholder="search" />
        )}
      </Wrapper>
    );
  }
}
