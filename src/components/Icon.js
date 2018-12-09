import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { iconsPath } from '../constants/svgPath'

const Wrapper = styled.div`
  -webkit-transform: ${props =>
    props.rotate ? `rotate(${props.rotate})` : 'rotate(0deg)'};
  -ms-transform: ${props =>
    props.rotate ? `rotate(${props.rotate})` : 'rotate(0deg)'};
  transform: ${props =>
    props.rotate ? `rotate(${props.rotate})` : 'rotate(0deg)'};
  transform: ${props =>
    props.rotate ? `rotate(${props.rotate})` : 'rotate(0deg)'};
`

const Icon = ({ type, width, height, rotate }) => {
  return (
    <Wrapper rotate={rotate}>
      <svg
        width={width || '24px'}
        height={height || '24px'}
        viewBox="0 0 24 24"
      >
        <path d={iconsPath[type]} />
      </svg>
    </Wrapper>
  )
}

Icon.propTypes = {
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  rotate: PropTypes.string,
}

export default Icon
