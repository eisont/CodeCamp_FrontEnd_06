const score = require("../src/score");

describe("시험 성적", () => {
  test('100점을 입력받은 경우 "A"를 리턴해야 합니다', () => {
    expect(score(100)).toEqual("A");
  });
  test('89점을 입력받은 경우 "B"를 리턴해야 합니다', () => {
    expect(score(89)).toEqual("B");
  });
  test('75점을 입력받은 경우  "C"를 리턴해야 합니다', () => {
    expect(score(75)).toEqual("C");
  });
  test('60점을 입력받은 경우 "D"를 리턴해야 합니다', () => {
    expect(score(60)).toEqual("D");
  });
  test('0점을 입력받은 경우 "F"를 리턴해야 합니다', () => {
    expect(score(0)).toEqual("F");
  });
});
