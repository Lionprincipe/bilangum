import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import BtnTray from './BtnTray'

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 0 4%;
  height: 60px;
  border-bottom: 2px solid #eee;
  z-index: 88000;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
`

const Header = ({ children }) => {
  return (
    <Wrapper>
      <BtnTray btnList={[{ type: 'menu' }]} />
      <div> {children}</div>
      <BtnTray btnList={[{ type: 'profile' }]} />
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
