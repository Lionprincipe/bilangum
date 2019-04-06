import React from 'react'
import PropTypes from 'prop-types'

const Svg = ({ width, height, path }) => {
  return (
    <svg width={width || '24px'} height={height || '24px'} viewBox="0 0 24 24">
      <path d={path && path} />
    </svg>
  )
}

Svg.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  path: PropTypes.string,
}

export default Svg
