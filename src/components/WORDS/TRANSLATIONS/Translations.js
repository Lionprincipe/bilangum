import React from 'react'
import PropTypes from 'prop-types'
import TranslationCardContainer from '../../../container/TranslationCardContainer'
import TranslationAddContainer from '../../../container/TranslationAddContainer'

const Translations = ({ list, wordIndex }) => {
  return (
    <React.Fragment>
      {list && list.length > 0 && (
        <TranslationCardContainer
          wordIndex={wordIndex}
          translationList={list}
        />
      )}
      <TranslationAddContainer wordIndex={wordIndex} />
    </React.Fragment>
  )
}

Translations.propTypes = { list: PropTypes.array, wordIndex: PropTypes.number }

export default Translations
