const isNeither = require("../src/isNeither");

describe("약수와 배수", () => {
  test('8과 16이 주어졌을 때, 약수이므로 "factor"를 리턴해야 합니다', () => {
    expect(isNeither(8, 16)).toEqual("factor");
  });

  test('32와 4가 주어졌을 때, 배수이므로 "multiple"을 리턴해야 합니다', () => {
    expect(isNeither(32, 4)).toEqual("multiple");
  });

  test('17과 5가 주어졌을 때, 약수나 배수가 아니므로 "neither"를 리턴해야 합니다', () => {
    expect(isNeither(17, 5)).toEqual("neither");
  });
});
