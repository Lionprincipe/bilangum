import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from './Icon'
import Button from './Button'
const Wrapper = styled.li`
  list-style-type: none;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.2em;
`
const WordTray = styled.div`
  padding: 0.5em;
  list-style-type: none;
  flex-grow: 1;
  font-size: 1.2em;
`
const BtnTray = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const WordCard = ({ word }) => {
  return (
    <Wrapper>
      <BtnTray>
        <Icon type="arrow" rotate="90Deg" />
      </BtnTray>
      <WordTray> {word}</WordTray>

      <BtnTray>
        <Button>
          <Icon type="translate" />
        </Button>
        <Button>
          <Icon type="eye" />
        </Button>
        <Button>
          <Icon type="pencil" />
        </Button>
      </BtnTray>
    </Wrapper>
  )
}

WordCard.propTypes = {
  word: PropTypes.string,
}

export default WordCard
