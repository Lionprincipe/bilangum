import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BtnTray from './BtnTray'

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
const LeftBtnList = [{ type: 'arrow', rotate: '90Deg' }]
const rightBtnList = [
  { type: 'translate' },
  { type: 'eye' },
  { type: 'plus' },
  { type: 'pencil' },
]

const WordCardHeader = ({ title }) => {
  return (
    <Wrapper>
      <BtnTray btnList={LeftBtnList} />
      <WordTray> {title}</WordTray>
      <BtnTray btnList={rightBtnList} />
    </Wrapper>
  )
}

WordCardHeader.propTypes = {
  title: PropTypes.string,
}

export default WordCardHeader
