import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import InputField from '../UI/InputField'
import BtnTrayContainer from '../../container/BtnTrayContainer'

const Wrapper = styled.div`
  margin: 0.2em;
  display: flex;
  align-items: center;
  font-size: 0.8em;
  text-transform: capitalize;
`
const StyledProperty = styled.em`
  color: #666;
  padding: 0 0.2em;
`
const StyleValue = styled.strong`
  margin-left: 0.2em;
`

const Property = ({
  name,
  value,
  toggleEdit,
  isEditing,
  onSubmit,
  deleteMe,
  placeholder,
}) => {
  return (
    <Wrapper>
      {isEditing ? (
        <InputField
          name={name}
          value={value}
          onSubmit={onSubmit}
          placeholder={placeholder}
        />
      ) : (
        <React.Fragment>
          <StyledProperty>{name}: </StyledProperty>
          <StyleValue>{value}</StyleValue>
        </React.Fragment>
      )}
      <BtnTrayContainer
        name={'appWordProperty'}
        status={isEditing ? 'edit' : 'default'}
        toggleEdit={toggleEdit}
        deleteMe={deleteMe}
      />
    </Wrapper>
  )
}

Property.propTypes = {
  name: PropTypes.string,
  value: PropTypes.PropTypes.string,
  onSubmit: PropTypes.func,
  isEditing: PropTypes.bool,
  toggleEdit: PropTypes.func,
  deleteMe: PropTypes.func,
}

export default Property
