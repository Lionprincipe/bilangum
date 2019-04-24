import * as selectors from './selectors'

describe('selector', () => {
  const defaultState = {
    svgPathList: [
      { name: 'arrow', path: 'safafafafdadfa' },
      { name: 'search', path: 'Badadaadaaddad' },
    ],
    referenceLanguage: { languageId: 'AAAAAAAA', language: 'french' },
    ethnicLanguage: { languageId: 'BBBBBBBBB', language: 'bete' },

    searchLanguage: [{ languageId: 'BBBBBBBBB', language: 'bete' }],
    words: [
      {
        translations: [],
        description: 'text',
        type: 'verb',
        word: 'être',
        language: { languageId: 'AAAAAAAA', language: 'french' },
        wordId: 'a4626c62-f88b-432f-b8f9-84610b6d0d12',
      },
      {
        translations: [],
        description: 'text',
        type: 'verb',
        language: { languageId: 'BBBBBBBBB', language: 'bete' },
        word: 'zaza',
        wordId: 'a5626c62-f88b-432f-b8f9-84610b6d0d12',
      },
      {
        translations: [],
        description: 'text',
        type: 'verb',
        language: { languageId: 'BBBBBBBBB', language: 'bete' },
        word: 'wewew',
        wordId: 'a6626c62-f88b-432f-b8f9-84610b6d0d12',
      },
    ],
  }

  describe('svgPathSelector', () => {
    it('', () => {
      const ownProps = { name: 'arrow' }
      expect(selectors.svgPathSelector(defaultState, ownProps)).toEqual(
        'safafafafdadfa'
      )
    })
  })

  describe('hasPreferedLanguageSelector', () => {
    it('', () => {
      expect(selectors.hasPreferedLanguageSelector(defaultState)).toBe(true)
    })
    it('', () => {
      const state = {
        referenceLanguage: { languageId: 'AAAAAAAA', language: 'french' },
        ethnicLanguage: {},
      }
      expect(selectors.hasPreferedLanguageSelector(state)).toBe(false)
    })
  })

  describe('wordsLanguageSelector', () => {
    it('', () => {
      expect(selectors.wordsLanguageSelector(defaultState)).toEqual([
        {
          translations: [],
          description: 'text',
          type: 'verb',
          language: { languageId: 'BBBBBBBBB', language: 'bete' },
          word: 'zaza',
          wordId: 'a5626c62-f88b-432f-b8f9-84610b6d0d12',
        },
        {
          translations: [],
          description: 'text',
          type: 'verb',
          language: { languageId: 'BBBBBBBBB', language: 'bete' },
          word: 'wewew',
          wordId: 'a6626c62-f88b-432f-b8f9-84610b6d0d12',
        },
      ])
    })
  })
  describe('translationsSuggestionSelector', () => {
    it('', () => {
      const ownProps = { wordIndex: 0 }
      expect(
        selectors.translationsSuggestionSelector(defaultState, ownProps)
      ).toEqual([
        {
          translations: [],
          description: 'text',
          type: 'verb',
          language: { languageId: 'BBBBBBBBB', language: 'bete' },
          word: 'zaza',
          wordId: 'a5626c62-f88b-432f-b8f9-84610b6d0d12',
        },
        {
          translations: [],
          description: 'text',
          type: 'verb',
          language: { languageId: 'BBBBBBBBB', language: 'bete' },
          word: 'wewew',
          wordId: 'a6626c62-f88b-432f-b8f9-84610b6d0d12',
        },
      ])
    })
  })

  describe('translationListSelector', () => {
    it('', () => {
      const ownProps = {
        translationList: [
          {
            wordId: 'a4626c62-f88b-432f-b8f9-84610b6d0d12',
          },
          {
            wordId: 'a6626c62-f88b-432f-b8f9-84610b6d0d12',
          },
        ],
      }
      expect(selectors.translationListSelector(defaultState, ownProps)).toEqual(
        [
          {
            translations: [],
            description: 'text',
            type: 'verb',
            word: 'être',
            language: { languageId: 'AAAAAAAA', language: 'french' },
            wordId: 'a4626c62-f88b-432f-b8f9-84610b6d0d12',
          },
          {
            translations: [],
            description: 'text',
            type: 'verb',
            language: { languageId: 'BBBBBBBBB', language: 'bete' },
            word: 'wewew',
            wordId: 'a6626c62-f88b-432f-b8f9-84610b6d0d12',
          },
        ]
      )
    })
  })
  describe('suggestionsSelector', () => {
    it('crops object with certains attributs', () => {
      const ownProps = {
        list: [
          {
            languageId: 'xxxxx',
            language: 'french',
            country: 'France',
          },
          {
            languageId: 'aaaaa',
            language: 'english',
            country: 'england',
          },
        ],
        attributs: ['language', 'languageId'],
      }
      expect(selectors.suggestionsSelector(ownProps)).toEqual([
        { languageId: 'xxxxx', language: 'french' },
        {
          languageId: 'aaaaa',
          language: 'english',
        },
      ])
    })
  })
  describe('translationAddSelector', () => {
    it('', () => {
      const ownProps = { wordIndex: 0 }
      expect(selectors.translationAddSelector(defaultState, ownProps)).toEqual({
        wordCopy: {
          translations: [
            {
              wordId: 'a4626c62-f88b-432f-b8f9-84610b6d0d12',
              word: 'être',
            },
          ],
          description: 'text',
          type: 'verb',
          language: { languageId: 'BBBBBBBBB', language: 'bete' },
        },
        originalWord: {
          translations: [],
          description: 'text',
          type: 'verb',
          word: 'être',
          language: { languageId: 'AAAAAAAA', language: 'french' },
          wordId: 'a4626c62-f88b-432f-b8f9-84610b6d0d12',
        },
      })
    })
  })
  describe('languageCheckedSelector', () => {
    it('true when languageId is the same', () => {
      const language = { languageId: '33ssf' }
      const searchLanguage = { languageId: '33ssf', name: 'gabala' }
      expect(selectors.languageCheckedSelector(language, searchLanguage)).toBe(
        true
      )
    })
    it('false when different ', () => {
      const language = { languageId: '33ssf' }
      const searchLanguage = {}
      expect(selectors.languageCheckedSelector(language, searchLanguage)).toBe(
        false
      )
    })
  })
  describe('selectAddPropertyNumber', () => {
    it('return 0 if there is the properties is not found ou wrong ', () => {
      const state = {}
      const ownProps = { wordIndex: 2 }
      expect(selectors.selectAddPropertyNumber(state, ownProps)).toEqual(0)
    })
    it('return the number of a specifique index occurrences', () => {
      const state = { newProperties: [2, 4, 2, 4, 5] }
      const ownProps = { wordIndex: 2 }
      expect(selectors.selectAddPropertyNumber(state, ownProps)).toEqual(2)
    })
  })

  describe('selectWordCardProps', () => {
    it('is empty object word is not found ', () => {
      const ownProps = { wordId: 'a4626c62-f88ddffb-432f-b8f9-84610b6d0d12' }
      expect(selectors.selectWordCardProps(defaultState, ownProps)).toEqual({})
    })
    it('return corresponding word most important properties ', () => {
      const ownProps = { wordId: 'a4626c62-f88b-432f-b8f9-84610b6d0d12' }
      expect(selectors.selectWordCardProps(defaultState, ownProps)).toEqual({
        wordIndex: 0,
        word: 'être',
        language: { languageId: 'AAAAAAAA', language: 'french' },
        translations: [],
        otherProps: { description: 'text', type: 'verb' },
      })
    })
  })
  describe('getWordElEditStatus', () => {
    it('not in the list', () => {
      const ownProps = { wordIndex: 1, name: 'type' }
      const state = { listOfWordElInEditMode: [] }
      expect(selectors.getWordElEditStatus(ownProps, state)).toBe(false)
    })
    it('select property edit status', () => {
      const ownProps = { wordIndex: 1, name: 'type' }
      const state = {
        listOfWordElInEditMode: [
          { id: 1, status: true, name: 'type' },
          { id: 2, status: false, name: 'type' },
        ],
      }
      expect(selectors.getWordElEditStatus(ownProps, state)).toBe(true)
    })
  })

  describe('iconAttributsSelector', () => {
    it('select property edit status', () => {
      const ownProps = { name: 'user' }
      const state = {
        buttonsAttributs: [
          {
            name: 'user',
            icon: 'profile',
          },
          {
            name: 'search',
            icon: 'search',
          },
        ],
      }
      expect(selectors.iconAttributsSelector(state, ownProps)).toEqual({
        name: 'profile',
        icon: 'profile',
      })
    })
  })
  describe('composeBtnsList', () => {
    it('drerree', () => {
      const state = {
        elBtnsList: [
          { name: 'appHeaderLeft', normal: [{ name: 'menu' }] },
          {
            name: 'appWordProperty',
            normal: [
              { name: 'edit', onClick: 'toggleEdit' },
              { name: 'delete', onClick: 'deleteMe' },
            ],
            edit: [{ name: 'cancel' }],
          },
        ],
      }
      const ownProps = {
        name: 'appWordProperty',
        status: 'default',
        toggleEdit: console.log,
      }
      expect(selectors.composeBtnsList(state, ownProps)).toEqual([
        { name: 'edit', onClick: console.log },
        { name: 'delete' },
      ])
    })
  })
})
