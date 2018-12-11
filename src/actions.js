import { createAction } from 'redux-actions'
const ACTIONS = {
  FIRST_ACTION: 'FIRST_ACTION',
}

export const first = createAction(ACTIONS.FIRST_ACTION)

export default ACTIONS
