import * as initialState from './constants/initialState'
import ACTIONS from './actions'

export default function reducer(state = initialState, action = {}) {
  const { words } = state
  switch (action.type) {
    case ACTIONS.WORD_UPDATE: {
      const { index, name, value } = action.payload
      return {
        ...state,
        words: [
          ...words.slice(0, index),
          { ...words[index], [name]: value },
          ...words.slice(index + 1),
        ],
      }
    }
    case ACTIONS.WORD_DELETE: {
      const { index } = action.payload
      return {
        ...state,
        words: [...words.slice(0, index), ...words.slice(index + 1)],
      }
    }
    case ACTIONS.PROPERTY_DELETE: {
      const { index, name } = action.payload
      const { [name]: deleteProperty, ...newWord } = words[index]
      return {
        ...state,
        words: [...words.slice(0, index), newWord, ...words.slice(index + 1)],
      }
    }
    case ACTIONS.PROPERTY_ADD: {
      const { index, name, value } = action.payload
      const newWord = { ...words[index], [name]: [value] }
      return {
        ...state,
        words: [...words.slice(0, index), newWord, ...words.slice(index + 1)],
      }
    }

    default:
      return state
  }
}
