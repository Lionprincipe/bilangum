import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BtnTrayContainer from '../container/BtnTrayContainer'

const Wrapper = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.2em;
`
const Translation = ({ text, onDelete, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {text && text}
      <BtnTrayContainer
        name={'translationOpt'}
        onClickDeleteTranslation={onDelete}
      />
    </Wrapper>
  )
}

Translation.propTypes = {
  text: PropTypes.string,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
}

export default Translation
