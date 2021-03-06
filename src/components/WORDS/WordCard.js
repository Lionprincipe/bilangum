import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WordCardFooter from './WordCardFooter'
import WordCardHeaderContainer from '../../container/WordCardHeaderContainer'
import WordCardBodyContainer from '../../container/WordCardBodyContainer'
import Translations from './TRANSLATIONS/Translations'
import WordLanguage from './WordLanguage'
import Toggle from '../../container/Toggle'

const Wrapper = styled('li')`
  margin-bottom: 0.4em;
  list-style-type: none;
  padding: 0.5em;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

const WordCard = ({ wordIndex, word, language, translations, otherProps }) => {
  return (
    <Wrapper>
      <Toggle
        toggle={(isOpen, toggleMe) => (
          <React.Fragment>
            <Toggle
              toggle={(isEditing, toggleEdit) => (
                <WordCardHeaderContainer
                  open={isOpen}
                  wordIndex={wordIndex}
                  title={word}
                  name={'word'}
                  toggleMe={toggleMe}
                  toggleEdit={toggleEdit}
                  isEditing={isEditing}
                />
              )}
            />
            {isOpen && (
              <React.Fragment>
                <Translations list={translations} wordIndex={wordIndex} />
                <WordLanguage language={language} />
                <WordCardBodyContainer
                  wordIndex={wordIndex}
                  properties={otherProps}
                />
                <WordCardFooter />
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      />
    </Wrapper>
  )
}

WordCard.propTypes = {
  isOpen: PropTypes.bool,
  word: PropTypes.string,
  otherProps: PropTypes.object,
  onUpdate: PropTypes.func,
  toggleOpenMode: PropTypes.func,
  wordIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default WordCard
