import React from 'react'
import Button from './Button'
import Icon from './Icon'

const ButtonAdd = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon name={'plus'} />
    </Button>
  )
}

ButtonAdd.propTypes = {}

export default ButtonAdd
