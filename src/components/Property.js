import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PropertyBtns } from '../constants/btnList'
import styled from 'styled-components'
import BtnTray from './BtnTray'
import InputField from './InputField'

const Wrapper = styled.div`
  margin: 0.2em;
  display: flex;
  align-items: center;
  font-size: 0.8em;
`
const StyledProperty = styled.em`
  color: #666;
  padding: 0 0.2em;
`
const StyleValue = styled.strong`
  margin-left: 0.2em;
`

class Property extends Component {
  static propTypes = {
    name: PropTypes.string,
    value: PropTypes.PropTypes.string,
    onUpdate: PropTypes.func,
  }
  state = {
    edit: false,
  }
  handleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    })
  }

  render() {
    const { edit } = this.state
    const { name, value, onUpdate, onDelete } = this.props
    const onSubmit = inputValue => {
      this.handleEdit()
      onUpdate(name, inputValue)
    }
    const btnList = [
      { ...PropertyBtns[edit ? 0 : 1], onClick: this.handleEdit },
      { ...PropertyBtns[2], onClick: () => onDelete(name) },
    ]
    return (
      <Wrapper>
        {edit ? (
          <InputField name={name} value={value} onSubmit={onSubmit} />
        ) : (
          <React.Fragment>
            <StyledProperty>{name}: </StyledProperty>
            <StyleValue>{value}</StyleValue>
          </React.Fragment>
        )}
        <BtnTray btnList={btnList} />
      </Wrapper>
    )
  }
}

export default Property
