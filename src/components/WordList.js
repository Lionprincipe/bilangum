import React from 'react'
import PropTypes from 'prop-types'

const WordList = ({ wordList }) => {
  const listElement = wordList.map(el => <li> {el}</li>)
  return (
    <div>
      <ul>{listElement}</ul>
    </div>
  )
}

WordList.propTypes = {
  wordList: PropTypes.arrayOf([PropTypes.string, PropTypes.object]),
}

export default WordList
