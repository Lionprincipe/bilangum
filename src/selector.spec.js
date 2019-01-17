import * as selectors from './selectors'

describe('selector', () => {
  describe('getWordElEditStatus', () => {
    it('absence in the list', () => {
      const ownProps = { wordId: 1, name: 'type' }
      const state = { listOfWordElInEditMode: [] }
      expect(selectors.getWordElEditStatus(ownProps, state)).toBe(false)
    })
    it('select property edit status', () => {
      const ownProps = { wordId: 1, name: 'type' }
      const state = {
        listOfWordElInEditMode: [
          { id: 1, status: true, name: 'type' },
          { id: 2, status: false, name: 'type' },
        ],
      }
      expect(selectors.getWordElEditStatus(ownProps, state)).toBe(true)
    })
  })
  describe('getWordElOpenStatus', () => {
    it('not in the list', () => {
      const ownProps = { wordId: 1 }
      const state = { listOfWordElInOpenMode: [] }
      expect(selectors.getWordElOpenStatus(ownProps, state)).toBe(false)
    })
    it('select property edit status', () => {
      const ownProps = { wordId: 1 }
      const state = {
        listOfWordElInOpenMode: [
          { id: 1, status: true },
          { id: 2, status: false },
        ],
      }
      expect(selectors.getWordElOpenStatus(ownProps, state)).toBe(true)
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
        { name: 'delete', onClick: undefined },
      ])
    })
  })
})
