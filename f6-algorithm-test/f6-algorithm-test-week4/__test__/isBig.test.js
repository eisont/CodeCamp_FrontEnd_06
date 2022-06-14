const isBig = require("../src/isBig");

describe("isBig", () => {
  test("3, 4, 5가 주어진 경우 false를 리턴해야 합니다", () => {
    expect(isBig(3, 4, 5)).toEqual(false);
  });

  test("165, 8461, 456이 주어진 경우 false를 리턴해야 합니다", () => {
    expect(isBig(165, 8461, 456)).toEqual(false);
  });

  test("2, 2, 1이 주어진 경우 true를 리턴해야 합니다", () => {
    expect(isBig(2, 2, 1)).toEqual(true);
  });
});
