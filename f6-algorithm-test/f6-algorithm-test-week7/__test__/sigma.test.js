const sigma = require("../src/sigma");

describe("시그마", () => {
  test("1과 3이 주어진 경우 6을 리턴해야 합니다", () => {
    expect(sigma(1, 3)).toEqual(6);
  });

  test("1과 10이 주어진 경우 55를 리턴해야 합니다", () => {
    expect(sigma(1, 10)).toEqual(55);
  });

  test("34와 78이 주어진 경우 2520을 리턴해야 합니다", () => {
    expect(sigma(34, 78)).toEqual(2520);
  });
});
