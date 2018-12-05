import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BtnTray from './BtnTray'

const Wrapper = styled.div`
  margin: 0.2em;
  display: flex;
  align-items: center;
`
const StyledProperty = styled.em`
  font-size: 0.7em;
  color: #666;
  padding: 0 0.2em;
`
const StyleValue = styled.div`
  font-size: 0.8em;
  margin-left: 0.2em;
`
const Property = ({ name, value }) => {
  return (
    <Wrapper>
      <StyledProperty>{name}: </StyledProperty>
      <StyleValue>{value}</StyleValue>
      <BtnTray btnList={[{ type: 'pencil', width: '.8em', height: '.8em' }]} />
    </Wrapper>
  )
}

Property.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
}

export default Property
