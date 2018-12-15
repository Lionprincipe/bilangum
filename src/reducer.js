import * as initialState from './constants/initialState'
import ACTIONS from './actions'

export default function reducer(state = initialState, action = {}) {
  const { payload } = action
  switch (action.type) {
    case ACTIONS.TOGGLE_OPEN_WORD_CARD: {
      const { wordId } = payload
      const { wordElStatusList } = state
      const index = wordElStatusList.findIndex(el => el.id === wordId)
      return {
        ...state,
        wordElStatusList:
          index > -1
            ? [
                ...wordElStatusList.slice(0, index),
                {
                  ...wordElStatusList[index],
                  isOpen: !wordElStatusList[index].isOpen,
                },
                ...wordElStatusList.slice(index + 1),
              ]
            : [...wordElStatusList, { id: wordId, isOpen: true }],
      }
    }

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
