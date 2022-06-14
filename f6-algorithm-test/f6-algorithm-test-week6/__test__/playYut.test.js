const playYut = require("../src/playYut");

describe("윷 놀이", () => {
  test('배 1개와, 등 3개가 주어진 경우 "도"를 리턴해야 합니다', () => {
    expect(playYut([0, 1, 1, 1])).toEqual("도");
  });
  test('배 2개와, 등 2개가 주어진 경우 "개"를 리턴해야 합니다', () => {
    expect(playYut([0, 1, 0, 1])).toEqual("개");
  });
  test('배 3개와, 등 1개가 주어진 경우 "걸"을 리턴해야 합니다', () => {
    expect(playYut([0, 0, 0, 1])).toEqual("걸");
  });
  test('배 4개와, 등 0개가 주어진 경우 "윷"을 리턴해야 합니다', () => {
    expect(playYut([0, 0, 0, 0])).toEqual("윷");
  });
  test('배 0개와, 등 4개가 주어진 경우 "모"를 리턴해야 합니다', () => {
    expect(playYut([1, 1, 1, 1])).toEqual("모");
  });
});
