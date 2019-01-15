import React from 'react'
import PropTypes from 'prop-types'
import ButtonAdd from './ButtonAdd'
import NewPropertyContainer from '../container/NewPropertyContainer'

const AddPorperty = ({ nbField, onClick, wordId }) => {
  const inputs =
    !!nbField &&
    [...Array(nbField)].map((_, index) => (
      <NewPropertyContainer
        wordId={wordId}
        key={index}
        name={`newProperty${index}`}
      />
    ))

  return (
    <React.Fragment>
      {inputs}
      <ButtonAdd onClick={onClick} />
    </React.Fragment>
  )
}

AddPorperty.propTypes = {
  nbField: PropTypes.number,
  onClick: PropTypes.func,
}

export default AddPorperty
