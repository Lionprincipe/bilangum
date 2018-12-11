import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BtnTray from './BtnTray'
import { wordHeaderLeftBtns, wordHeaderRightBtns } from '../constants/btnList'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2em;
`
const WordTray = styled.div`
  padding: 0.5em;
  flex-grow: 1;
  font-size: 1.2em;
`

const WordCardHeader = ({ title, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <BtnTray btnList={wordHeaderLeftBtns} />
      <WordTray> {title}</WordTray>
      <BtnTray btnList={wordHeaderRightBtns} />
    </Wrapper>
  )
}

WordCardHeader.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}

export default WordCardHeader
