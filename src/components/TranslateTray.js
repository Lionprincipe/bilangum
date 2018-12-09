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
const LeftBtnList = [{ type: 'arrow', rotate: '180Deg' }]
const rightBtnList = [{ type: 'arrow', rotate: '0Deg' }]

const TranslateTray = ({ translationList }) => {
  const content =
    translationList &&
    translationList.map((el, index) => <WordTray key={index}> {el}</WordTray>)
  return (
    <Wrapper>
      <BtnTray btnList={LeftBtnList} />
      {content} <BtnTray btnList={rightBtnList} />
    </Wrapper>
  )
}

TranslateTray.propTypes = {
  translationList: PropTypes.array,
}

export default TranslateTray
