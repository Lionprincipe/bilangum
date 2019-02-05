import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.ol`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
`

const Dot = styled.li`
  display: inline-block;
  width: 5px;
  height: 5px;
  margin: 0 8px;
  background: ${props => (props.color === 'true' ? '#000' : '#b3b5b7')};
  border-radius: 50%;
  cursor: pointer;
`
const TranslationDots = ({ count, selected, onDotClick }) => {
  const nbDots = count || 0
  const dotsEl =
    nbDots > -1 &&
    [...Array(nbDots)].map((_, index) => (
      <Dot
        key={index}
        color={`${index === selected}`}
        onClick={() => onDotClick(index)}
      />
    ))

  return <Wrapper>{dotsEl}</Wrapper>
}

TranslationDots.propTypes = {
  selected: PropTypes.number,
  count: PropTypes.number,
  onDotClick: PropTypes.func,
}

export default TranslationDots
