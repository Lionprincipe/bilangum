import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import InputField from './InputField'
import BtnTrayContainer from '../container/BtnTrayContainer'

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

const WordCardHeader = ({
  title,
  onClick,
  onUpdate,
  open,
  isEditing,
  toggleEdit,
  onDelete,
}) => {
  const onSubmit = inputValue => {
    onUpdate('word', inputValue)
  }

  return (
    <Wrapper>
      <BtnTrayContainer
        name={'wordHeaderLeft'}
        status={isEditing ? 'edit' : 'default'}
        toggleOpen={onClick}
      />
      {isEditing ? (
        <InputField
          name={'word'}
          placeholder={title}
          value={title}
          onSubmit={onSubmit}
        />
      ) : (
        <WordTray onClick={onClick}>{title}</WordTray>
      )}
      <BtnTrayContainer
        name={'wordHeaderRight'}
        status={isEditing ? 'edit' : 'default'}
        toggleEdit={toggleEdit}
        deleteWord={onDelete}
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
