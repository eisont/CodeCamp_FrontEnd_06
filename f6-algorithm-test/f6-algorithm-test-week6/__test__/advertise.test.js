const advertise = require("../src/advertise");

describe("광고", () => {
  test('r이 0, e가 100, c가 70일 때 "advertise"를 반환해야 합니다', () => {
    expect(advertise(0, 100, 70)).toEqual("advertise");
  });

  test('r이 100, e가 130, c가 30일 때 "does not matter"를 반환해야 합니다', () => {
    expect(advertise(100, 130, 30)).toEqual("does not matter");
  });

  test('r이 50, e가 130, c가 30일 때 "advertise"를 반환해야 합니다', () => {
    expect(advertise(50, 130, 30)).toEqual("advertise");
  });

  test('r이 -100, e가 -70, c가 40일 때 "do not advertise"를 반환해야 합니다', () => {
    expect(advertise(-100, -70, 40)).toEqual("do not advertise");
  });

  test('r이 110, e가 150, c가 10일 때 "advertise"를 반환해야 합니다', () => {
    expect(advertise(110, 150, 10)).toEqual("advertise");
  });
});
