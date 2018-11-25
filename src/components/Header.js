import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = ({ children }) => {
  return (
    <Wrapper>
      <Button>Sandwich</Button>
      <div> {children}</div>
      <Button>Profile</Button>
    </Wrapper>
  )
}

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
}

export default Header
