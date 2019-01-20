import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from './Modal'
import WordCardContainer from '../container/WordCardContainer'

const Wrapper = styled.ul`
  padding: 0;
  width: 95%;
  margin: 1em auto;
`

const TranslationView = ({ wordId, isOpen, onClose }) => {
  return (
    isOpen && (
      <React.Fragment>
        <Modal onClose={onClose}>
          <Wrapper>
            <WordCardContainer isOpen={true} wordId={wordId} />
          </Wrapper>
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
