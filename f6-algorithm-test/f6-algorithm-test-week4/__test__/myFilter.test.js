const myFilter = require('../src/myFilter')

describe('myFilter', () => {
  test('짝수만 리턴', () => {
    const array = [0, 1, 2, 3]
    const callbackFn = (element, index) => {
      return element % 2 === 0
    }
    expect(myFilter(array, callbackFn)).toEqual([0, 2])
  })

  test('짝수번째 인덱스인것만 리턴', () => {
    const array = [0, 1, 2, 3]
    const callbackFn = (element, index) => {
      return index % 2 === 0
    }
    expect(myFilter(array, callbackFn)).toEqual([0, 2])
  })

  test('빈 문자열이 아닌것만 리턴', () => {
    const array = ['a', '', '', 'b']
    const callbackFn = (element, index) => {
      return element !== ''
    }
    expect(myFilter(array, callbackFn)).toEqual(['a', 'b'])
  })

  test('두 배열에서 같은 인덱스면서, 같은 요소인것만 리턴', () => {
    const array1 = [1, 2, 3]
    const array2 = [0, 2, 3, 4]
    const callbackFn = (element, index) => {
      return element === array2[index]
    }
    expect(myFilter(array1, callbackFn)).toEqual([2, 3])
  })

  test('3보다 작은 값만 리턴', () => {
    const array = [0, 1, 2, 3, 4, 5]
    const callbackFn = (element, index) => {
      return element < 3
    }
    expect(myFilter(array, callbackFn)).toEqual([0, 1, 2])
  })

  test('3으로 나누어 떨어지는것만 리턴', () => {
    const array = [1, 2, 3, 4, 5, 6]
    const callbackFn = (element, index) => {
      return element % 3 === 0
    }
    expect(myFilter(array, callbackFn)).toEqual([3, 6])
  })
})
