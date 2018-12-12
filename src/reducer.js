import * as initialState from './constants/initialState'
import ACTIONS from './actions'

export default function reducer(state = initialState, action = {}) {
  const { payload } = action
  switch (action.type) {
    case ACTIONS.WORD_UPDATE: {
      const { index, name, value } = payload
      const { words } = state
      return {
        ...state,
        words: [
          ...words.slice(0, index),
          { ...words[index], [name]: value },
          ...words.slice(index + 1),
        ],
      }
    }

    default:
      return state
  }
}
