import React from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'
import WordCardContainer from '../container/WordCardContainer'

const TranslationView = ({ wordId, isOpen, onClose }) => {
  return (
    isOpen && (
      <React.Fragment>
        <Modal onClose={onClose}>
          <WordCardContainer isOpen={true} wordId={wordId} />
        </Modal>
      </React.Fragment>
    )
  )
}

TranslationView.propTypes = {
  wordId: PropTypes.number,
  onClose: PropTypes.func,
}

export default TranslationView
