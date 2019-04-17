import { createAction } from 'redux-actions'
import uuidV4 from 'uuid/v4'
import { updateList } from './utils'
const ACTIONS = {
  WORD_UPDATE: 'WORD_UPDATE',
  ADD_WORD: 'ADD_WORD',
  DELETE_WORD: 'DELETE_WORD',
  DELETE_WORD_PROPERTY: 'DELETE_WORD_PROPERTY',
  ADD_WORD_PROPERTY: 'ADD_WORD_PROPERTY',
  TOGGLE_OPEN_WORD_CARD: 'TOGGLE_OPEN_WORD_CARD',
  TOGGLE_EDIT_MODE: 'TOGGLE_EDIT_MODE',
  ADD_NEW_PROPERTY: 'ADD_NEW_PROPERTY',
  REMOVE_NEW_PROPERTY: 'REMOVE_NEW_PROPERTY',
  TOGGLE_IS_ADDING: 'TOGGLE_IS_ADDING',
  SET_REFERENCE_LANGUAGE: 'SET_REFERENCE_LANGUAGE',
  SET_ETHNIC_LANGUAGE: 'SET_ETHNIC_LANGUAGE',
  SET_SEARCH_LANGUAGE: 'SET_SEARCH_LANGUAGUE',
  UPDATE_EXISTANTE_TRANSLATION: 'UPDATE_EXISTANTE_TRANSLATION',
  RESET_TO_INITIAL_CONFIG: 'RESET_TO_INITIAL_CONFIG',
}

export const addWord = createAction(ACTIONS.ADD_WORD)
export const wordUpdate = createAction(ACTIONS.WORD_UPDATE)
export const deleteWord = createAction(ACTIONS.DELETE_WORD)
export const deleteWordProperty = createAction(ACTIONS.DELETE_WORD_PROPERTY)
export const addWordProperty = createAction(ACTIONS.ADD_WORD_PROPERTY)
export const toggleOpenWordCard = createAction(ACTIONS.TOGGLE_OPEN_WORD_CARD)
export const toggleEditMode = createAction(ACTIONS.TOGGLE_EDIT_MODE)
export const toggleIsAdding = createAction(ACTIONS.TOGGLE_IS_ADDING)
export const addNewProperty = createAction(ACTIONS.ADD_NEW_PROPERTY)
export const removeNewProperty = createAction(ACTIONS.REMOVE_NEW_PROPERTY)
export const setReferenceLanguage = createAction(ACTIONS.SET_REFERENCE_LANGUAGE)
export const setEthnicLanguage = createAction(ACTIONS.SET_ETHNIC_LANGUAGE)
export const setSeachLanguage = createAction(ACTIONS.SET_SEARCH_LANGUAGE)
export const updateExistanteTransalation = createAction(
  ACTIONS.UPDATE_EXISTANTE_TRANSLATION
)
export const resetToInitialState = createAction(ACTIONS.RESET_TO_INITIAL_CONFIG)

export const createWordProperty = (wordIndex, name, dispatch) => {
  wordIndex > -1 && name && dispatch(addWordProperty({ wordIndex, name }))
  wordIndex > -1 && dispatch(removeNewProperty({ wordIndex }))
}

export const createWord = (newWord, dispatch) => {
  if (newWord) {
    newWord = { wordId: uuidV4(), ...newWord }
    dispatch(addWord({ newWord }))
  }
}

export const updateTranslation = (wordIndex, newList, dispatch) => {
  newList &&
    dispatch(wordUpdate({ wordIndex, name: 'translations', value: newList }))
}

export const saveNewTranslation = (
  newWord,
  value,
  list,
  wordIndex,
  dispatch
) => {
  const { wordId: id } = value
  if (!id) {
    const wordId = uuidV4()
    newWord = { wordId, ...newWord, ...value }
    newWord && dispatch(addWord({ newWord }))
    wordIndex > -1 &&
      updateTranslation(
        wordIndex,
        updateList(list, -1, { wordId, ...value }),
        dispatch
      )
  } else {
    value && dispatch(updateExistanteTransalation({ value, wordIndex }))
    wordIndex > -1 &&
      value &&
      updateTranslation(wordIndex, updateList(list, -1, value), dispatch)
  }
}
export const saveEthnicLanguage = (ethnicLanguage, dispatch) => {
  const { languageId } = ethnicLanguage

  if (languageId) {
    dispatch(setEthnicLanguage({ ethnicLanguage }))
  }
}

export const resetPreferences = dispatch => {
  dispatch(setEthnicLanguage({ ethnicLanguage: {} }))
  dispatch(setReferenceLanguage({ referenceLanguage: {} }))
  dispatch(
    setSeachLanguage({
      searchLanguage: {},
    })
  )
}

export default ACTIONS
