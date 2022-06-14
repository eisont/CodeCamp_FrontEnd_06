const myReplaceAll = require('../src/myReplaceAll')

describe('replaceAll 구현', () => {
  test('"it"를 "aa"로 치환하기', () => {
    expect(
      myReplaceAll(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'it',
        'aa'
      )
    ).toEqual('Lorem ipsum dolor saa amet, consectetur adipiscing elaa.')
  })

  test('"dog"를 "monkey"로 치환하기', () => {
    const p =
      'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

    expect(myReplaceAll(p, 'dog', 'monkey')).toEqual(
      'The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?'
    )
  })
})
