import * as initialState from '../constants/initialState'
import ACTIONS from '../actions'
import { updateList, findIndexInList } from '../utils'

export default function reducer(state = initialState, action = {}) {
  const {
    words,
    newProperties,
    listOfWordElInOpenMode,
    listOfWordElInEditMode,
  } = state

  const { payload } = action

  switch (action.type) {
    case ACTIONS.ADD_NEW_PROPERTY: {
      return { ...state, newProperties: [...newProperties, payload.wordId] }
    }

    case ACTIONS.REMOVE_NEW_PROPERTY: {
      const { newProperties: prevList } = state
      const index = prevList.findIndex(el => el === payload.wordId)
      const newProperties = index > -1 ? updateList(prevList, index) : prevList
      return { ...state, newProperties }
    }

    case ACTIONS.TOGGLE_OPEN_WORD_CARD: {
      const { wordId } = payload
      return {
        ...state,
        listOfWordElInOpenMode: toggleStatus(listOfWordElInOpenMode, wordId),
      }
    }

    case ACTIONS.TOGGLE_EDIT_MODE: {
      const { wordId, name } = payload
      return {
        ...state,
        listOfWordElInEditMode: toggleStatus(
          listOfWordElInEditMode,
          wordId,
          name
        ),
      }
    }

    case ACTIONS.TOGGLE_IS_ADDING: {
      const { isAdding } = state
      return { ...state, isAdding: !isAdding }
    }

    case ACTIONS.ADD_WORD: {
      return { ...state, words: [...words, payload.newWord] }
    }

    case ACTIONS.WORD_UPDATE: {
      const { wordId: index, name, value } = payload
      const newWord = { ...words[index], [name]: value }
      return { ...state, words: updateList(words, index, newWord) }
    }

    case ACTIONS.DELETE_WORD: {
      const { wordId: index } = payload
      return { ...state, words: updateList(words, index) }
    }

    case ACTIONS.DELETE_WORD_PROPERTY: {
      const { wordId: index, name } = payload
      const newWord = removeKeyInObject(words[index], name)
      return { ...state, words: updateList(words, index, newWord) }
    }

    case ACTIONS.ADD_WORD_PROPERTY: {
      const { wordId: index, name, value } = payload
      const newWord = { ...words[index], [name]: value || '' }
      return { ...state, words: updateList(words, index, newWord) }
    }

    default:
      return state
  }
}

function removeKeyInObject(object, key) {
  return Object.keys(object)
    .filter(el => el !== key)
    .reduce((acc, curr) => (acc = { ...acc, [curr]: object[curr] }), {})
}

function toggleStatus(list, id, name) {
  const index = findIndexInList(list, id, name),
    status = !(index > -1) || !list[index].status,
    newEntry = name ? { id, name, status } : { id, status }
  return updateList(list, index, newEntry)
}
