import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { footerBtn } from '../constants/btnList'

import BtnTray from './BtnTray'

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 3em;
  border-top: 2px solid #eee;
  z-index: 88000;
  padding-top: 5px;
  margin: auto;
`

const Footer = props => {
  return (
    <StyledFooter>
      <BtnTray btnList={footerBtn} />
    </StyledFooter>
  )
}

Footer.propTypes = {}

export default Footer
