import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  margin: 0.2em;
  padding: 0.2em;
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  color: black;
  background: ${props => (props.color ? props.color : '#fff')};
  color: black;
  border-radius: 4px;
  font-size: 1em;
  border: ${props => (props.border ? '.5px solid black' : 'none')};
  &:hover {
    background: #eee;
  }
`

const Button = ({ children, disabled, onClick, border, width, height }) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      border={border}
      width={width}
      height={height}
    >
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default Button
