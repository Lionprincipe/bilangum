import React from 'react'
import PropTypes from 'prop-types'

const SearchField = ({ placeholder }) => {
  return (
    <div>
      <input type="search" placeholder="" />
    </div>
  )
}

SearchField.propTypes = {
  placeholder: PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
}

export default SearchField
