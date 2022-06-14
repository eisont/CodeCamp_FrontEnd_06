const isMultiple = require("../src/isMultiple");

describe("배수 찾기", () => {
  test("3의 배수를 찾아 true를 리턴해야 합니다", () => {
    expect(isMultiple(3, [1, 7, 99, 321, 777])).toEqual([
      false,
      false,
      true,
      true,
      true,
    ]);
  });

  test("4의 배수를 찾아 true를 리턴해야 합니다", () => {
    expect(isMultiple(4, [26, 58, 34, 89, 687])).toEqual([
      false,
      false,
      false,
      false,
      false,
    ]);
  });
});
