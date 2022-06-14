const bingo = require("../src/bingo");

describe("빙고", () => {
  test("빙고 3개 완성", () => {
    expect(
      bingo([
        [true, false],
        [true, true],
      ])
    ).toEqual(3);
  });

  test("빙고 2개 완성", () => {
    expect(
      bingo([
        [true, false, false],
        [true, true, false],
        [true, false, true],
      ])
    ).toEqual(2);
  });

  test("빙고 3개 완성", () => {
    expect(
      bingo(
        [
          [true, false, false],
          [true, true, false],
          [true, false, true],
        ],
        [2, 1]
      )
    ).toEqual(3);
  });

  test("빙고 4개 완성", () => {
    expect(
      bingo([
        [true, false, false, true],
        [true, true, true, true],
        [true, true, true, false],
        [true, false, true, true],
      ])
    ).toEqual(4);
  });

  test("빙고 1개 완성", () => {
    expect(
      bingo([
        [true, false, false, false, true],
        [true, false, false, true, false],
        [true, true, true, false, true],
        [true, false, true, false, false],
        [true, false, true, false, false],
      ])
    ).toEqual(1);
  });
});
