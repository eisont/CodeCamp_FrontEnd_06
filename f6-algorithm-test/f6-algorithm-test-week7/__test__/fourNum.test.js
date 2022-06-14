const fourNum = require("../src/fourNum");

describe("네수", () => {
  test("10, 20, 30, 40을 입력받은 경우 4060을 리턴해야 합니다", () => {
    expect(fourNum(10, 20, 30, 40)).toEqual(4060);
  });

  test("23, 93, 62, 87을 입력받은 경우 8680을 리턴해야 합니다", () => {
    expect(fourNum(23, 93, 62, 87)).toEqual(8680);
  });
});
