import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SvgContainer from '../../container/SvgContainer'

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

const Icon = ({ name, width, height, rotate }) => {
  return (
    <Wrapper rotate={rotate}>
      <SvgContainer width={width} height={height} name={name} />
    </Wrapper>
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  rotate: PropTypes.string,
}

export default Icon
