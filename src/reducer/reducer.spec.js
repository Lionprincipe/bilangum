import ACTIONS from '../actions'
import reducer from './reducer'

describe('reducer', () => {
  let state
  beforeEach(
    () =>
      (state = {
        words: [
          { word: 'word', type: 'noun', language: 'english' },
          { word: 'to be', type: 'verb', language: 'english' },
        ],
      })
  )
  it('always returns a state', () => {
    expect(reducer(state, { type: 'foo' })).toBe(state)
    expect(reducer(state, {})).toBe(state)
    expect(reducer(state)).toBe(state)
  })

  describe(ACTIONS.ADD_WORD, () => {
    it('add a word to the words list', () => {
      const action = {
        type: ACTIONS.ADD_WORD,
        payload: {
          newWord: { word: 'etre', type: 'verb', language: 'french' },
        },
      }
      expect(reducer(state, action)).toEqual({
        words: [
          { word: 'word', type: 'noun', language: 'english' },
          { word: 'to be', type: 'verb', language: 'english' },
          { word: 'etre', type: 'verb', language: 'french' },
        ],
      })
    })
  })
  describe(ACTIONS.WORD_UPDATE, () => {
    it('update a word', () => {
      const action = {
        type: ACTIONS.WORD_UPDATE,
        payload: {
          wordId: 1,
          name: 'language',
          value: 'french',
        },
      }
      expect(reducer(state, action)).toEqual({
        words: [
          { word: 'word', type: 'noun', language: 'english' },
          { word: 'to be', type: 'verb', language: 'french' },
        ],
      })
    })
  })
  // DELETE_WORD: 'DELETE_WORD',
  describe(ACTIONS.DELETE_WORD, () => {
    it('delete a word', () => {
      const action = { type: ACTIONS.DELETE_WORD, payload: { wordId: 1 } }
      expect(reducer(state, action)).toEqual({
        words: [{ word: 'word', type: 'noun', language: 'english' }],
      })
    })
  })
  //   DELETE_WORD_PROPERTY: 'DELETE_WORD_PROPERTY',
  describe(ACTIONS.DELETE_WORD_PROPERTY, () => {
    it('delete a word property', () => {
      const action = {
        type: ACTIONS.DELETE_WORD_PROPERTY,
        payload: { wordId: 0, name: 'type' },
      }

      expect(reducer(state, action)).toEqual({
        words: [
          { word: 'word', language: 'english' },
          { word: 'to be', type: 'verb', language: 'english' },
        ],
      })
    })
  })
  //     ADD_WORD_PROPERTY: 'ADD_WORD_PROPERTY',

  describe(ACTIONS.ADD_WORD_PROPERTY, () => {
    it('add a property to a word ', () => {
      const action = {
        type: ACTIONS.ADD_WORD_PROPERTY,
        payload: { wordId: 0, name: 'propplus', value: 'valueplus' },
      }
      expect(reducer(state, action)).toEqual({
        words: [
          {
            word: 'word',
            type: 'noun',
            language: 'english',
            propplus: 'valueplus',
          },
          { word: 'to be', type: 'verb', language: 'english' },
        ],
      })
    })
  })
  //       TOGGLE_OPEN_WORD_CARD: 'TOGGLE_OPEN_WORD_CARD',
  describe(ACTIONS.TOGGLE_OPEN_WORD_CARD, () => {
    it('toggle open mode for a word property ', () => {
      state = {
        ...state,
        listOfWordElInOpenMode: [
          { id: 1, status: true },
          { id: 2, status: false },
        ],
      }
      const action = {
        type: ACTIONS.TOGGLE_OPEN_WORD_CARD,
        payload: { wordId: 0 },
      }
      expect(reducer(state, action)).toEqual({
        ...state,
        listOfWordElInOpenMode: [
          { id: 1, status: true },
          { id: 2, status: false },
          { id: 0, status: true },
        ],
      })
    })
  })
  //         TOGGLE_EDIT_MODE: 'TOGGLE_EDIT_MODE',
  describe(ACTIONS.TOGGLE_EDIT_MODE, () => {
    it('toggle edit mode for a word property', () => {
      state = {
        ...state,
        listOfWordElInEditMode: [
          { id: 1, status: true, name: 'type' },
          { id: 2, status: false, name: 'type' },
        ],
      }
      const action = {
        type: ACTIONS.TOGGLE_EDIT_MODE,
        payload: { wordId: 1, name: 'type' },
      }
      expect(reducer(state, action)).toEqual({
        ...state,
        listOfWordElInEditMode: [
          { id: 1, status: false, name: 'type' },
          { id: 2, status: false, name: 'type' },
        ],
      })
    })
  })

  //           ADD_NEW_PROPERTY: 'ADD_NEW_PROPERTY',
  describe(ACTIONS.ADD_NEW_PROPERTY, () => {
    it('show a new propety input in a  specific wordcard', () => {
      const action = { type: ACTIONS.ADD_NEW_PROPERTY, payload: { wordId: 0 } }
      state = { ...state, newProperties: [1, 1, 2, 3, 1] }

      expect(reducer(state, action)).toEqual({
        ...state,
        newProperties: [1, 1, 2, 3, 1, 0],
      })
    })
  })

  describe(ACTIONS.REMOVE_NEW_PROPERTY, () => {
    it('hide a new propety input in a  specific wordcard', () => {
      const action = {
        type: ACTIONS.REMOVE_NEW_PROPERTY,
        payload: { wordId: 0 },
      }
      state = { ...state, newProperties: [1, 1, 2, 3, 1, 0] }

      expect(reducer(state, action)).toEqual({
        ...state,
        newProperties: [1, 1, 2, 3, 1],
      })
    })
  })

  describe(ACTIONS.TOGGLE_IS_ADDING, () => {
    it('toggle adding new word', () => {
      const action = { type: ACTIONS.TOGGLE_IS_ADDING }
      state = { ...state, isAdding: false }

      expect(reducer(state, action)).toEqual({
        ...state,
        isAdding: true,
      })
    })
  })

  //                 TOGGLE_IS_ADDING: 'TOGGLE_IS_ADDING',
})
