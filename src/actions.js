import { createAction } from 'redux-actions'
const ACTIONS = {
  WORD_UPDATE: 'WORD_UPDATE',
  DELETE_WORD: 'DELETE_WORD',
  DELETE_WORD_PROPERTY: 'DELETE_WORD_PROPERTY',
  TOGGLE_OPEN_WORD_CARD: 'TOGGLE_WORD_CARD',
  TOGGLE_EDIT_MODE: 'TOGGLE_EDIT_MODE',
}

export const wordUpdate = createAction(ACTIONS.WORD_UPDATE)
export const deleteWord = createAction(ACTIONS.DELETE_WORD)
export const deleteWordProperty = createAction(ACTIONS.DELETE_WORD_PROPERTY)
export const toggleOpenWordCard = createAction(ACTIONS.TOGGLE_OPEN_WORD_CARD)
export const toggleEditMode = createAction(ACTIONS.TOGGLE_EDIT_MODE)

export default ACTIONS
