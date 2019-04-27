import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import PropertyContainer from '../../container/PropertyContainer'
import AddPropertyContainer from '../../container/AddPropertyContainer'
import Toggle from '../../container/Toggle'

const Wrapper = styled.div`
  box-sizing: border-box;
  border-bottom: 0.5px solid #eee;
  border-top: 0.5px solid #eee;
  padding: 0.4em 0;
`

const WordCardBody = ({ wordIndex, properties, children, onUpdate }) => {
  const keys = Object.keys(properties)
  const elList =
    keys.length > 0 &&
    keys.map((el, index) => (
      <Toggle
        key={index}
        toggle={(isEditing, toggleEdit) => (
          <PropertyContainer
            name={el}
            value={properties[el]}
            onUpdate={onUpdate}
            wordIndex={wordIndex}
            isEditing={isEditing}
            toggleEdit={toggleEdit}
          />
        )}
      />
    ))

  return (
    <Wrapper>
      {children}
      {elList}
      <AddPropertyContainer wordIndex={wordIndex} />
    </Wrapper>
  )
}

WordCardBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
  wordIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  properties: PropTypes.object,
  onUpdate: PropTypes.func,
}

export default WordCardBody
