const mySplice = require('../src/mySplice')

describe('mySplice', () => {
  test('하나도 제거하지 않고, 2번 인덱스에 "drum" 추가', () => {
    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    const result = mySplice(myFish, 2, 0, 'drum')
    expect(result.removed).toEqual([])
    expect(result.array).toEqual([
      'angel',
      'clown',
      'drum',
      'mandarin',
      'sturgeon'
    ])
  })

  test('하나도 제거하지 않고, 2번 인덱스에 "drum"과 "guitar" 추가', () => {
    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    const result = mySplice(myFish, 2, 0, 'drum', 'guitar')
    expect(result.removed).toEqual([])
    expect(result.array).toEqual([
      'angel',
      'clown',
      'drum',
      'guitar',
      'mandarin',
      'sturgeon'
    ])
  })

  test('3번 인덱스에서 한 개 요소 제거', () => {
    const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
    const result = mySplice(myFish, 3, 1)
    expect(result.removed).toEqual(['mandarin'])
    expect(result.array).toEqual(['angel', 'clown', 'drum', 'sturgeon'])
  })

  test('2번 인덱스에서 한 개 요소 제거하고 "trumpet" 추가', () => {
    const myFish = ['angel', 'clown', 'drum', 'sturgeon']
    const result = mySplice(myFish, 2, 1, 'trumpet')
    expect(result.removed).toEqual(['drum'])
    expect(result.array).toEqual(['angel', 'clown', 'trumpet', 'sturgeon'])
  })

  test('0번 인덱스에서 두 개 요소 제거하고 "parrot", "anemone", "blue" 추가', () => {
    const myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
    const result = mySplice(myFish, 0, 2, 'parrot', 'anemone', 'blue')
    expect(result.removed).toEqual(['angel', 'clown'])
    expect(result.array).toEqual([
      'parrot',
      'anemone',
      'blue',
      'trumpet',
      'sturgeon'
    ])
  })

  test('2번 인덱스에서 두 개 요소 제거', () => {
    const myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
    const result = mySplice(myFish, myFish.length - 3, 2)
    expect(result.removed).toEqual(['blue', 'trumpet'])
    expect(result.array).toEqual(['parrot', 'anemone', 'sturgeon'])
  })

  test('-2번 인덱스에서 한 개 요소 제거', () => {
    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    const result = mySplice(myFish, -2, 1)
    expect(result.removed).toEqual(['mandarin'])
    expect(result.array).toEqual(['angel', 'clown', 'sturgeon'])
  })

  test('2번 인덱스를 포함해서 이후의 모든 요소 제거', () => {
    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    const result = mySplice(myFish, 2)
    expect(result.removed).toEqual(['mandarin', 'sturgeon'])
    expect(result.array).toEqual(['angel', 'clown'])
  })

  test('deleteCount가 0 이하일 때, 하나도 제거하지 않음', () => {
    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    const result = mySplice(myFish, 2, -5)
    expect(result.removed).toEqual([])
    expect(result.array).toEqual(['angel', 'clown', 'mandarin', 'sturgeon'])
  })

  test('deleteCount가 0 이하일 때, 하나도 제거하지 않음, 추가 요소 있음', () => {
    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
    const result = mySplice(myFish, 2, -5, 'parrot')
    expect(result.removed).toEqual([])
    expect(result.array).toEqual([
      'angel',
      'clown',
      'parrot',
      'mandarin',
      'sturgeon'
    ])
  })
})
