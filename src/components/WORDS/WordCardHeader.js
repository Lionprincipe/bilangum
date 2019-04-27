import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InputField from '../UI/InputField'
import BtnTrayContainer from '../../container/BtnTrayContainer'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.2em;
  text-transform: capitalize;
`
const WordTray = styled.div`
  padding: 0.5em;
  flex-grow: 1;
  font-size: 1.2em;
`

const WordCardHeader = ({
  isEditing,
  toggleEdit,
  title,
  name,
  onSubmit,
  open,
  onDelete,
  toggleMe,
}) => {
  return (
    <Wrapper>
      <BtnTrayContainer
        name={'wordHeaderLeft'}
        status={open ? 'open' : 'default'}
        toggleOpen={toggleMe}
      />
      {isEditing ? (
        <InputField
          name={name}
          placeholder={title}
          value={title || ''}
          onSubmit={inputValue => onSubmit(name, inputValue)}
        />
      ) : (
        <WordTray onClick={toggleMe}>{title}</WordTray>
      )}

      <BtnTrayContainer
        name={'wordHeaderRight'}
        status={isEditing ? 'edit' : 'default'}
        toggleEdit={toggleEdit}
        deleteWord={onDelete}
        isEditing={isEditing}
      />
    </Wrapper>
  )
}

WordCardHeader.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  toggleEdit: PropTypes.func,
  open: PropTypes.bool,
  isEditing: PropTypes.bool,
}

export default WordCardHeader
