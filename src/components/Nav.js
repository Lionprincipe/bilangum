import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 4%;
  justify-content: space-between;
  width: 92%;
`
const Nav = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

Nav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
}

export default Nav
