import { createAction } from 'redux-actions'
const ACTIONS = {
  WORD_UPDATE: 'WORD_UPDATE',
}

export const wordUpdate = createAction(ACTIONS.WORD_UPDATE)

export default ACTIONS
