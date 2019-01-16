import { add, multiply } from './maths'

describe('internal math library', () => {
  describe('add', () => {
    it('adds two numbers', () => {
      expect(add(3, 5)).toEqual(8)
    })

    it('works with just one number', () => {
      expect(add(5)).toEqual(5)
    })

    it('works with any number of arguments', () => {
      expect(add(1, 2, 3, 4)).toEqual(10)
      expect(add(1, 2, 3, 4, 5, 6)).toEqual(21)
    })
  })

  describe('multiply', () => {
    it('works with just one argument', () => {
      expect(multiply(2)).toEqual(2)
    })

    it('works with multiple arguments', () => {
      expect(multiply(2, 4, 3)).toEqual(24)
    })
  })
})
