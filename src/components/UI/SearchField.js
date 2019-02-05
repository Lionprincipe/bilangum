import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'
import styled from 'styled-components'
import Button from './Button'

const StyledInput = styled.input`
  line-height: 5em;
  border: none;
  height: 100%;
  width: 100%;
  padding-left: 2%;
  font-size: 1em;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #333;
  height: 32px;
  border-radius: 3px;
  font-size: 1em;
  margin: 2em;
  padding: 2%;
  width: 80%;
`

const SearchField = ({ placeholder }) => {
  return (
    <Wrapper>
      <StyledInput type="search" placeholder={placeholder || '...'} />
      <Button>
        <Icon type="search" />
      </Button>
    </Wrapper>
  )
}

SearchField.propTypes = {
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SearchField
