import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
  height: 48px;
  background: ${props => (props.color ? props.color : 'hotpink')};
  color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  &:hover {
    background: teal;
  }
`

const Button = ({ children, disabled, onClick }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
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
}

export default Button
