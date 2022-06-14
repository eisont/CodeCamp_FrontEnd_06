const factorial = require("../src/factorial");

describe("팩토리얼", () => {
  test("0이 주어진 경우 1을 리턴해야 합니다", () => {
    expect(factorial(0)).toEqual(1);
  });

  test("1이 주어진 경우 1을 리턴해야 합니다", () => {
    expect(factorial(1)).toEqual(1);
  });

  test("2가 주어진 경우 2를 리턴해야 합니다", () => {
    expect(factorial(2)).toEqual(2);
  });

  test("3이 주어진 경우 6을 리턴해야 합니다", () => {
    expect(factorial(3)).toEqual(6);
  });

  test("4가 주어진 경우 24를 리턴해야 합니다", () => {
    expect(factorial(4)).toEqual(24);
  });

  test("5가 주어진 경우 120을 리턴해야 합니다", () => {
    expect(factorial(5)).toEqual(120);
  });

  test("10이 주어진 경우 3628800을 리턴해야 합니다", () => {
    expect(factorial(10)).toEqual(3628800);
  });
});
