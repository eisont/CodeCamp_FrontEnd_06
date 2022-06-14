const binary = require("../src/binary");

describe("이진수", () => {
  test("13을 입력받았을 때, 3을 리턴해야 합니다", () => {
    expect(binary(13)).toEqual(3);
  });

  test("666을 입력받았을 때, 5를 리턴해야 합니다", () => {
    expect(binary(666)).toEqual(5);
  });

  test("219를 입력받았을 때 6을 리턴해야 합니다", () => {
    expect(binary(219)).toEqual(6);
  });
});
