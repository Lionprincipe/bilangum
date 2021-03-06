import React from 'react'
import styled from 'styled-components'

import BtnTrayContainer from '../container/BtnTrayContainer'

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  height: 3em;
  border-top: 2px solid #eee;
  z-index: 8000;
  padding-top: 5px;
  margin: auto;
`

const Footer = props => {
  return (
    <StyledFooter>
      <BtnTrayContainer name={'appFooter'} status={'default'} />
    </StyledFooter>
  )
}

export default Footer
