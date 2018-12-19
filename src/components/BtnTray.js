import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import IconContainer from '../container/IconContainer'
import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const BtnTray = ({ btnList }) => {
  const elList =
    btnList &&
    btnList.map(({ name, rotate, width, height, onClick }, index) => (
      <Button key={index} onClick={onClick}>
        <IconContainer
          name={name}
          rotate={rotate}
          width={width}
          height={height}
        />
      </Button>
    ))

  return <Wrapper>{elList}</Wrapper>
}

BtnTray.propTypes = {
  btnList: PropTypes.arrayOf(PropTypes.object),
}

export default BtnTray
