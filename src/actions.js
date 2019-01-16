import { createAction } from 'redux-actions'
const ACTIONS = {
  WORD_UPDATE: 'WORD_UPDATE',
  ADD_WORD: 'ADD_WORD',
  DELETE_WORD: 'DELETE_WORD',
  DELETE_WORD_PROPERTY: 'DELETE_WORD_PROPERTY',
  ADD_WORD_PROPERTY: 'ADD_WORD_PROPERTY',
  TOGGLE_OPEN_WORD_CARD: 'TOGGLE_OPEN_WORD_CARD',
  TOGGLE_EDIT_MODE: 'TOGGLE_EDIT_MODE',
  ADD_NEW_PROPERTY: 'ADD_NEW_PROPERTY',
  DELETE_NEW_PROPERTY: 'DELETE_NEW_PROPERTY',
  REMOVE_NEW_PROPERTY: 'REMOVE_NEW_PROPERTY',
  TOGGLE_IS_ADDING: 'TOGGLE_IS_ADDING',
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

export const createWordProperty = (wordId, name, dispatch) => {
  wordId > -1 && name && dispatch(addWordProperty({ wordId, name }))
  wordId > -1 && dispatch(removeNewProperty({ wordId }))
}

export const add = (a, b) => a + b
export default ACTIONS
