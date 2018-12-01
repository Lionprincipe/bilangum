import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from './Button'
import Icon from './Icon'
import Nav from './Nav'

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 60px;
  border-top: 2px solid #eee;
  z-index: 88000;
  margin: 0 auto;
`

const footerBtn = () =>
  ['home', 'search', 'tag', 'bell', 'settings'].map((el, index) => (
    <Button key={index}>
      <Icon type={el} />
    </Button>
  ))

const Footer = props => {
  return (
    <StyledFooter>
      <Nav>{footerBtn()}</Nav>
    </StyledFooter>
  )
}

Footer.propTypes = {}

export default Footer
