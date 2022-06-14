const plug = require("../src/plug");

describe("플러그", () => {
  test("[1, 1, 1]을 입력받은 경우 1을 리턴해야 합니다", () => {
    expect(plug([1, 1, 1])).toEqual(1);
  });

  test("[5, 8]을 입력받은 경우 12를 리턴해야 합니다", () => {
    expect(plug([5, 8])).toEqual(12);
  });

  test("[7, 2, 12]를 입력받은 경우 19를 리턴해야 합니다", () => {
    expect(plug([7, 2, 12])).toEqual(19);
  });
});
