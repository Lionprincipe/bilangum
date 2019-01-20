import React from 'react'
import PropTypes from 'prop-types'
import TranslationCardContainer from '../container/TranslationCardContainer'
import TranslationAddContainer from '../container/TranslationAddContainer'

const Translations = ({ list, wordId }) => {
  return (
    <React.Fragment>
      {list && list.length > 0 && (
        <TranslationCardContainer wordId={wordId} translationList={list} />
      )}
      <TranslationAddContainer wordId={wordId} />
    </React.Fragment>
  )
}

Translations.propTypes = { list: PropTypes.array, wordId: PropTypes.number }

export default Translations
