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
      return { ...state, newProperties: [...newProperties, payload.wordIndex] }
    }

    case ACTIONS.REMOVE_NEW_PROPERTY: {
      const { newProperties: prevList } = state
      const index = prevList.findIndex(el => el === payload.wordIndex)
      const newProperties = index > -1 ? updateList(prevList, index) : prevList
      return { ...state, newProperties }
    }

    case ACTIONS.TOGGLE_OPEN_WORD_CARD: {
      const { wordIndex } = payload
      return {
        ...state,
        listOfWordElInOpenMode: toggleStatus(listOfWordElInOpenMode, wordIndex),
      }
    }

    case ACTIONS.TOGGLE_EDIT_MODE: {
      const { wordIndex, name } = payload
      return {
        ...state,
        listOfWordElInEditMode: toggleStatus(
          listOfWordElInEditMode,
          wordIndex,
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
      return { ...state, words: [...words, newWord && newWord] }
    }

    case ACTIONS.WORD_UPDATE: {
      const { wordIndex: index, name, value } = payload
      const newWord = { ...words[index], [name]: value }
      return { ...state, words: updateList(words, index, newWord) }
    }

    case ACTIONS.DELETE_WORD: {
      const { wordIndex: index } = payload
      return { ...state, words: updateList(words, index) }
    }

    case ACTIONS.DELETE_WORD_PROPERTY: {
      const { wordIndex: index, name } = payload
      const newWord = removeKeyInObject(words[index], name)
      return { ...state, words: updateList(words, index, newWord) }
    }

    case ACTIONS.ADD_WORD_PROPERTY: {
      const { wordIndex: index, name, value } = payload
      const newWord = { ...words[index], [name]: value || '' }
      return { ...state, words: updateList(words, index, newWord) }
    }

    case ACTIONS.SET_REFERENCE_LANGUAGE: {
      const { referenceLanguage } = payload
      return { ...state, referenceLanguage }
    }
    case ACTIONS.SET_ETHNIC_LANGUAGE: {
      const { ethnicLanguage } = payload
      return { ...state, ethnicLanguage }
    }
    case ACTIONS.SET_SEARCH_LANGUAGE: {
      const { searchLanguage } = payload
      return { ...state, searchLanguage }
    }
    case ACTIONS.UPDATE_EXISTANTE_TRANSLATION: {
      const {
        value: { wordId },
        wordIndex,
      } = payload
      const { words } = state
      const { wordId: translationId, word } = words[wordIndex]
      const index = words.findIndex(({ wordId: id }) => id === wordId)
      let { translations } = words[index]
      translations = updateList(translations, -1, {
        wordId: translationId,
        word,
      })
      const newWord = { ...words[index], translations }
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
