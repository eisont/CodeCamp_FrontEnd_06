const dayBefore = require("../src/dayBefore");

describe("특별한 날", () => {
  test('2월 15일이 주어졌을 때 "Before"를 리턴해야 합니다', () => {
    expect(dayBefore(2, 15)).toEqual("Before");
  });

  test('10월 17일이 주어졌을 때 "After"를 리턴해야 합니다', () => {
    expect(dayBefore(10, 17)).toEqual("After");
  });

  test('2월 19일이 주어졌을 때 "Special"을 리턴해야 합니다', () => {
    expect(dayBefore(2, 19)).toEqual("Special");
  });
});
