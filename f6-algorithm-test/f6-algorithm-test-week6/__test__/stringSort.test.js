const stringSort = require("../src/stringSort");

describe("문자열 정렬", () => {
  test('["hello", "coding", "world"]와 2가 주어졌을 때 ["coding", "hello", "world]를 반환해야 합니다', () => {
    expect(stringSort(["hello", "coding", "world"], 2)).toEqual([
      "coding",
      "hello",
      "world",
    ]);
  });

  test('["Junny", "is", "cute"]와 0이 주어졌을 때 ["cute", "is", "Junny"]를 반환해야 합니다', () => {
    expect(stringSort(["Junny", "is", "cute"], 0)).toEqual([
      "cute",
      "is",
      "Junny",
    ]);
  });

  test('["localeCompare", "use", "hint"]와 2가 주어졌을 때 ["localeCompare", "use", "hint"]를 반환해야 합니다', () => {
    expect(stringSort(["localeCompare", "use", "hint"], 2)).toEqual([
      "localeCompare",
      "use",
      "hint",
    ]);
  });
});
