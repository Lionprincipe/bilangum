import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Property from './Property'

const Wrapper = styled.div`
  box-sizing: border-box;
  border-bottom: 0.5px solid #eee;
  border-top: 0.5px solid #eee;
  padding: 0.4em 0;
`

const WordCardBody = ({ children }) => {
  const keys = Object.keys(children)

  const elList =
    keys.length > 0 &&
    keys.map((el, index) => (
      <Property key={index} name={el} value={children[el]} />
    ))

  return <Wrapper>{elList}</Wrapper>
}

WordCardBody.propTypes = {
  children: PropTypes.object,
}

export default WordCardBody
