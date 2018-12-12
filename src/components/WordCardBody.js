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

const WordCardBody = ({ properties, children, onUpdate }) => {
  const keys = Object.keys(properties)

  const elList =
    keys.length > 0 &&
    keys.map((el, index) => (
      <Property
        key={index}
        name={el}
        value={properties[el]}
        onUpdate={onUpdate}
      />
    ))

  return (
    <Wrapper>
      {children}
      {elList}
    </Wrapper>
  )
}

WordCardBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
  properties: PropTypes.object,
  onUpdate: PropTypes.func,
}

export default WordCardBody
