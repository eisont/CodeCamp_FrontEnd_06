const isCute = require("../src/isCute");

describe("isCute", () => {
  test('[1, 0, 0]을 입력받은 경우 "Junny is not cute!"를 리턴해야 합니다', () => {
    expect(isCute([1, 0, 0])).toEqual("Junny is not cute!");
  });

  test('[0, 0, 0]을 입력받은 경우 "Junny is not cute!"를 리턴해야 합니다', () => {
    expect(isCute([0, 0, 0])).toEqual("Junny is not cute!");
  });

  test('[1, 1, 0]을 입력받은 경우 "Junny is cute!"를 리턴해야 합니다', () => {
    expect(isCute([1, 1, 0])).toEqual("Junny is cute!");
  });

  test('[1, 1, 1]을 입력받은 경우 "Junny is cute!"를 리턴해야 합니다', () => {
    expect(isCute([1, 1, 1])).toEqual("Junny is cute!");
  });
});
