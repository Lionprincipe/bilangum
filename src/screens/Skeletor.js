import React from 'react'
import PropTypes from 'prop-types'

const Skeletor = ({ children }) => {
  return <div>{children}</div>
}

Skeletor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
}

export default Skeletor
