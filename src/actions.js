import { createAction } from 'redux-actions'
const ACTIONS = {
  WORD_UPDATE: 'WORD_UPDATE',
  TOGGLE_OPEN_WORD_CARD: 'TOGGLE_WORD_CARD',
}

export const wordUpdate = createAction(ACTIONS.WORD_UPDATE)
export const toggleOpenWordCard = createAction(ACTIONS.TOGGLE_OPEN_WORD_CARD)

export default ACTIONS
