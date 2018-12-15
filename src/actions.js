import { createAction } from 'redux-actions'
const ACTIONS = {
  WORD_UPDATE: 'WORD_UPDATE',
  WORD_DELETE: 'WORD_DELETE',
  PROPERTY_DELETE: 'PROPERTY_DELETE',
}

export const wordUpdate = createAction(ACTIONS.WORD_UPDATE)
export const wordDelete = createAction(ACTIONS.WORD_DELETE)
export const propertyDelete = createAction(ACTIONS.PROPERTY_DELETE)

export default ACTIONS
