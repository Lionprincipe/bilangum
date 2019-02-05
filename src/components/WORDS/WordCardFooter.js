import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.div`
  display: flex;
  font-size: 0.8em;
  color: #a8a8a8;
  align-items: flex-end;
  justify-content: space-between;
  margin: 0.4em;
`
const WordCardFooter = props => {
  return (
    <Wrapper>
      <div>facebook createbe by on</div>
    </Wrapper>
  )
}

export default WordCardFooter
