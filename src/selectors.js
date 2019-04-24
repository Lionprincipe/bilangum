import { findIndexInList, updateList } from './utils'

export const svgPathSelector = ({ svgPathList }, { name }) =>
  svgPathList &&
  svgPathList.reduce(
    (acc, { name: currName, path }) => (acc = currName === name ? path : acc),
    ''
  )

export const hasPreferedLanguageSelector = ({
  referenceLanguage,
  ethnicLanguage,
}) =>
  referenceLanguage &&
  ethnicLanguage &&
  Object.keys(referenceLanguage).length > 0 &&
  Object.keys(ethnicLanguage).length > 0

export const wordsLanguageSelector = ({ words, searchLanguage }) => {
  return (
    (words &&
      words.filter(
        ({ language: { languageId } }) =>
          searchLanguage.length > 0 &&
          searchLanguage.some(
            ({ languageId: searchId }) => languageId === searchId
          )
      )) ||
    []
  )
}

export const translationsSuggestionSelector = (
  { words, ethnicLanguage, referenceLanguage },
  { wordIndex }
) => {
  const {
    language: { languageId },
  } = words[wordIndex]
  const { languageId: ethnicId } = ethnicLanguage
  const { languageId: referenceId } = referenceLanguage
  if (ethnicId === languageId) {
    const searchLanguage = [referenceLanguage]
    return wordsLanguageSelector({
      words,
      searchLanguage,
    })
  } else if (referenceId === languageId) {
    const searchLanguage = [ethnicLanguage]
    return wordsLanguageSelector({ words, searchLanguage })
  } else {
    return words || []
  }
}

export const wordIndexFromWordIdSelector = ({ words }, { wordId }) =>
  words.findIndex(({ wordId: id }) => id === wordId)

export const translationListSelector = ({ words }, { translationList }) => {
  if (words && words.length > 0) {
    return words.filter(
      ({ wordId }) =>
        wordId && translationList.some(({ wordId: el }) => el === wordId)
    )
  }
}

export const suggestionsSelector = ({ list, attributs }) => {
  const suggestions =
    (list &&
      list.map(el =>
        attributs.reduce(
          (acc, curr) => (acc = { ...acc, [curr]: el[curr] }),
          {}
        )
      )) ||
    []
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
    translations: updateList(translations || [], -1, { wordId, word }) || [],
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
  (newProperties && newProperties.filter(el => el === wordIndex).length) || 0

export const selectWordCardProps = ({ words }, { wordId }) => {
  const wordIndex = wordIndexFromWordIdSelector({ words }, { wordId })
  let result = {}
  if (wordIndex >= 0) {
    const { word, translations, language, wordId: _, ...otherProps } = words[
      wordIndex
    ]
    result = { wordIndex, word, language, translations, otherProps }
  }
  return result
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
