const halloween = require("../src/halloween");

describe("할로윈의 사탕", () => {
  test("22와 3을 입력받은 경우 [7, 1]을 리턴해야 합니다", () => {
    expect(halloween(22, 3)).toEqual([7, 1]);
  });

  test("15와 5를 입력받은 경우 [3, 0]을 리턴해야 합니다", () => {
    expect(halloween(15, 5)).toEqual([3, 0]);
  });

  test("99와 8을 입력받은 경우 [12, 3]을 리턴해야 합니다", () => {
    expect(halloween(99, 8)).toEqual([12, 3]);
  });

  test("7과 4를 입력받은 경우 [1, 3]을 리턴해야 합니다", () => {
    expect(halloween(7, 4)).toEqual([1, 3]);
  });

  test("101과 5를 입력받은 경우 [20, 1]을 리턴해야 합니다", () => {
    expect(halloween(101, 5)).toEqual([20, 1]);
  });
});
