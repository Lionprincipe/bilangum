import * as initialState from './constants/initialState'
import ACTIONS from './actions'

export default function reducer(state = initialState, action = {}) {
  const { payload } = action
  switch (action.type) {
    case ACTIONS.TOGGLE_OPEN_WORD_CARD: {
      const { wordId } = payload
      const { listOfWordElInOpenMode } = state
      const index = listOfWordElInOpenMode.findIndex(
        el => el && el.id === wordId
      )
      return {
        ...state,
        listOfWordElInOpenMode:
          index > -1
            ? [
                ...listOfWordElInOpenMode.slice(0, index),
                {
                  ...listOfWordElInOpenMode[index],
                  isOpen: !listOfWordElInOpenMode[index].isOpen,
                },
                ...listOfWordElInOpenMode.slice(index + 1),
              ]
            : [...listOfWordElInOpenMode, { id: wordId, isOpen: true }],
      }
    }
    case ACTIONS.TOGGLE_EDIT_MODE: {
      const { wordId, name } = payload
      console.log(wordId, name)
      const { listOfWordElInEditMode } = state
      const index = listOfWordElInEditMode.findIndex(
        el => el.id === wordId && el.name === name
      )

      return {
        ...state,
        listOfWordElInEditMode:
          index > -1
            ? [
                ...listOfWordElInEditMode.slice(0, index),
                {
                  ...listOfWordElInEditMode[index],
                  id: wordId,
                  name,
                  status: !listOfWordElInEditMode[index].status,
                },
                ...listOfWordElInEditMode.slice(index + 1),
              ]
            : [
                ...listOfWordElInEditMode,
                {
                  id: wordId,
                  name,
                  status: true,
                },
              ],
      }
    }

    case ACTIONS.WORD_UPDATE: {
      const { wordId: index, name, value } = payload
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
