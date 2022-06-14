const triangle = require("../src/triangle");

describe("직각삼각형", () => {
  test('3, 4, 5를 입력받은 경우 "right"를 리턴해야 합니다', () => {
    expect(triangle(3, 4, 5)).toEqual("right");
  });

  test('4, 5, 10을 입력받은 경우 "wrong"을 리턴해야 합니다', () => {
    expect(triangle(4, 5, 10)).toEqual("wrong");
  });
});
