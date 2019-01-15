import * as initialState from './constants/initialState'
import ACTIONS from './actions'

export default function reducer(state = initialState, action = {}) {
  const { words } = state
  const { payload } = action

  switch (action.type) {
    case ACTIONS.ADD_NEW_PROPERTY: {
      const { wordId } = payload
      const { newProperties } = state
      return {
        ...state,
        newProperties: [...newProperties, wordId],
      }
    }

    case ACTIONS.REMOVE_NEW_PROPERTY: {
      const { wordId } = payload
      const { newProperties: prevList } = state
      const index = prevList.findIndex(el => el === wordId)
      const newProperties = index > -1 ? updateList(prevList, index) : prevList
      return {
        ...state,
        newProperties,
      }
    }

    case ACTIONS.TOGGLE_OPEN_WORD_CARD: {
      const { wordId } = payload,
        { listOfWordElInOpenMode } = state
      return {
        ...state,
        listOfWordElInOpenMode: toggleStatus(listOfWordElInOpenMode, wordId),
      }
    }

    case ACTIONS.TOGGLE_EDIT_MODE: {
      const { wordId, name } = payload,
        { listOfWordElInEditMode } = state
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
      const { newWord } = payload
      return { ...state, words: [...words, newWord] }
    }

    case ACTIONS.WORD_UPDATE: {
      const { wordId: index, name, value } = payload,
        newWord = { ...words[index], [name]: value }
      return { ...state, words: updateList(words, index, newWord) }
    }

    case ACTIONS.DELETE_WORD: {
      const { wordId: index } = payload
      return { ...state, words: updateList(words, index) }
    }

    case ACTIONS.DELETE_WORD_PROPERTY: {
      const { wordId: index, name } = payload,
        newWord = removeKeyInObject(words[index], name)
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

function updateList(list, index, newItem) {
  return newItem
    ? [...list.slice(0, index), newItem, ...list.slice(index + 1)]
    : [...list.slice(0, index), ...list.slice(index + 1)]
}

function findIndexInList(list, id, name) {
  return name
    ? list.findIndex(el => el && el.id === id && el.name === name)
    : list.findIndex(el => el && el.id === id)
}

function toggleStatus(list, id, name) {
  const index = findIndexInList(list, id, name),
    status = !(index > -1) || !list[index].status
  return updateList(list, index, { id, name, status })
}
