import * as initialState from './constants/initialState'
import ACTIONS from './actions'

export default function reducer(state = initialState, action = {}) {
  const {
    words,
    newProperties,
    listOfWordElInOpenMode,
    listOfWordElInEditMode,
  } = state
  const {
    payload: { wordId, name, newWord, value },
  } = action

  switch (action.type) {
    case ACTIONS.ADD_NEW_PROPERTY: {
      return {
        ...state,
        newProperties: [...newProperties, wordId],
      }
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
