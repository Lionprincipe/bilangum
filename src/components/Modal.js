import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
`

const Dialog = styled.div`
  position: relative;
  outline: 0;
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  max-width: 520px;
  cursor: default;
  z-index: 22000;
`

const Content = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 22000;
  overflow: auto;
  text-align: center;
  overflow-scrolling: touch;
  padding: 4px;
  cursor: pointer;

  &:after {
    vertical-align: middle;
    display: inline-block;
    height: 100%;
    margin-left: -0.05em;
    content: '';
  }
`

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  onOverlayClick = event => {
    event.stopPropagation()
    this.props.onClose()
  }

  render() {
    return (
      <React.Fragment>
        <Content>
          <Overlay onClick={this.onOverlayClick} />
          <Dialog>{this.props.children}</Dialog>
        </Content>
      </React.Fragment>
    )
  }
}

export default Modal
