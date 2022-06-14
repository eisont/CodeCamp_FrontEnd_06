const quadrant = require("../src/quadrant");

describe("사분면 고르기", () => {
  test("x가 12, y가 5일때는 1사분면이므로, 1을 리턴해야 합니다", () => {
    expect(quadrant(12, 5)).toEqual(1);
  });
  test("x가 -12, y가 5일때는 2사분면이므로, 2를 리턴해야 합니다", () => {
    expect(quadrant(-12, 5)).toEqual(2);
  });
  test("x가 -12, y가 -5일때는 3사분면이므로, 3을 리턴해야 합니다", () => {
    expect(quadrant(-12, -5)).toEqual(3);
  });
  test("x가 12, y가 -5일때는 4사분면이므로, 4를 리턴해야 합니다", () => {
    expect(quadrant(12, -5)).toEqual(4);
  });
});
