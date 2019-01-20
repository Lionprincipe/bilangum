import { findIndexInList, updateList } from './utils'

export const translationAddSelector = (state, ownProps) => {
  const originalWord = selectCurrentWord(state, ownProps)
  const { translation, word, ...others } = originalWord
  const wordCopy = {
    ...others,
    translation: (translation && updateList(translation, -1, word)) || [],
    language: 'afro',
  }
  return { wordCopy, originalWord }
}
export const selectAddPropertyNumber = ({ newProperties }, { wordId }) =>
  newProperties && newProperties.filter(el => el === wordId).length

export const selectCurrentWord = ({ words }, { wordId, word }) =>
  word || (wordId >= 0 && words[wordId])

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
  { wordId, isOpen },
  { listOfWordElInOpenMode }
) => {
  const index = findIndexInList(listOfWordElInOpenMode, wordId)
  if (typeof isOpen !== 'undefined') {
    return isOpen
  } else {
    return index > -1 && listOfWordElInOpenMode[index].status
  }
}

export const getWordElEditStatus = (ownProps, state) => {
  const { wordId, name } = ownProps
  const { listOfWordElInEditMode } = state
  const index = findIndexInList(listOfWordElInEditMode, wordId, name)
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
