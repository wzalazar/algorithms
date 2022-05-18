import { twoNumberSum1, twoNumberSum2, twoNumberSum3 } from './index'

const cases = [
  [[3, 5, -4, 8, 11, 1, -1, 6], 10, [11, -1]],
  [[4, 6], 10, [4, 6]],
  [[4, 6, 1], 5, [4, 1]],
  [[4, 6, 1, -3], 3, [6, -3]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9], 17, [8, 9]],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18, [3, 15]],
  [[-7, -5, -3, -1, 0, 1, 3, 5, 7], -5, [-5, 0]],
  [[-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163, [210, -47]],
  [[-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164, []],
  [[3, 5, -4, 8, 11, 1, -1, 6], 15, []],
  [[14], 15, []],
  [[15], 15, []],
]

describe('Array: Two number sum, solution 1', () => {
  test.each(cases)('given %p and %p as target, returns %p', (array, target, expected) => {
    const actual = twoNumberSum1(array, target, expected)

    expect(actual).toEqual(
      expect.arrayContaining(expected),
    )
  })
})

describe('Array: Two number sum, solution 2', () => {
  test.each(cases)('given %p and %p as target, returns %p', (array, target, expected) => {
    const actual = twoNumberSum2(array, target, expected)

    expect(actual).toEqual(
      expect.arrayContaining(expected),
    )
  })
})

describe('Array: Two number sum, solution 3', () => {
  test.each(cases)('given %p and %p as target, returns %p', (array, target, expected) => {
    const actual = twoNumberSum3(array, target, expected)

    expect(actual).toEqual(
      expect.arrayContaining(expected),
    )
  })
})
