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

const TranslationView = ({ wordIndex, isOpen, onClose }) => {
  return (
    isOpen && (
      <React.Fragment>
        <Modal onClose={onClose}>
          <Wrapper>
            <WordCardContainer isOpen={true} wordIndex={wordIndex} />
          </Wrapper>
        </Modal>
      </React.Fragment>
    )
  )
}

TranslationView.propTypes = {
  wordIndex: PropTypes.number,
  onClose: PropTypes.func,
}

export default TranslationView
