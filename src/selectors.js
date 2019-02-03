import { findIndexInList, updateList } from './utils'

export const wordsLanguageSelector = ({
  words,
  searchLanguage: { languageId: searchId },
}) =>
  (words &&
    words.filter(({ language: { languageId } }) => languageId === searchId)) ||
  []

export const wordIndexFromWordIdSelector = ({ words }, { wordId }) => {
  return words.findIndex(({ wordId: id }) => id === wordId)
}

export const translationListSelector = ({ words }, { translationList }) => {
  if (words && words.length > 0) {
    return words.filter(
      ({ wordId }) =>
        wordId && translationList.some(({ wordId: el }) => el === wordId)
    )
  }
}

export const suggestionsSelector = (state, { collection, attributs }) => {
  const list = state[collection]
  const suggestions =
    (list &&
      list.map(el =>
        attributs.reduce(
          (acc, curr) => (acc = { ...acc, [curr]: el[curr] }),
          {}
        )
      )) ||
    []
  console.log(collection, 'collction', attributs, 'attribut')
  return suggestions
}

export const translationAddSelector = (
  { words, referenceLanguage, ethnicLanguage },
  { wordIndex }
) => {
  const originalWord = (words && words[wordIndex]) || {}
  const { translations, language, wordId, word, ...others } = originalWord
  const wordCopy = {
    ...others,
    translations: updateList(translations || [], -1, wordId) || [],
    language: languageCheckedSelector(language, referenceLanguage)
      ? ethnicLanguage
      : referenceLanguage,
  }
  return { wordCopy, originalWord }
}

export const languageCheckedSelector = (
  { languageId: langId },
  { languageId: searchId }
) => langId === searchId

export const selectAddPropertyNumber = ({ newProperties }, { wordIndex }) =>
  newProperties && newProperties.filter(el => el === wordIndex).length

export const selectWordCardProps = (
  { words, listOfWordElInOpenMode },
  { wordId, isOpen }
) => {
  const wordIndex = wordIndexFromWordIdSelector({ words }, { wordId })
  const { word, translations, language, wordId: leave, ...otherProps } = words[
    wordIndex
  ]
  isOpen && console.log(word, 'goman', words[wordIndex])
  isOpen = !!isOpen || getWordElOpenStatus(wordIndex, listOfWordElInOpenMode)
  const result =
    (wordIndex >= 0 && { wordIndex, word, translations, otherProps, isOpen }) ||
    {}

  return result
}

export const modalIdSelector = state => {
  const { modal } = state
  return (modal && modal.length - 1) || 0
}

export const composeBtnsList = (state, ownProps) => {
  const { elBtnsList } = state
  const { name, status, ...others } = ownProps
  const { normal, edit, open } = getTrayBtns(name, elBtnsList)
  return (
    normal &&
    normal.map((el, index) => ({
      ...el,
      ...onClickSelector(el.onClick, others),
      ...modeSelector(status, edit, index),
      ...modeSelector(status, open, index),
    }))
  )
}

export const iconAttributsSelector = ({ buttonsAttributs }, { name }) =>
  buttonsAttributs
    .filter(e => e.name === name)
    .reduce((acc, curr) => (acc = { ...curr, name: curr.icon }), {})

export const getWordElOpenStatus = (
  wordIndex,
  listOfWordElInOpenMode,
  isOpen
) => {
  const index = findIndexInList(listOfWordElInOpenMode, wordIndex)
  if (typeof isOpen !== 'undefined') {
    return isOpen
  } else {
    return index > -1 && listOfWordElInOpenMode[index].status
  }
}

export const getWordElEditStatus = (ownProps, state) => {
  const { wordIndex, name } = ownProps
  const { listOfWordElInEditMode } = state
  const index = findIndexInList(listOfWordElInEditMode, wordIndex, name)
  return index > -1 && listOfWordElInEditMode[index].status
}

function getTrayBtns(name, list) {
  return name && list.filter(el => name && name === el.name)[0]
}

function onClickSelector(name, others) {
  return name && { onClick: others[name] }
}

function modeSelector(status, mode, index) {
  return !status || status === 'default' || (mode && mode[index])
}
