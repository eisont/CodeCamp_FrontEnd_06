const order = require("../src/order");

describe("문자열 정렬", () => {
  test('is2 Thi1s T4est 3a를 입력받은 경우 "Thi1s is2 3a T4est"를 리턴해야 합니다', () => {
    expect(order("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est");
  });

  test('4of Fo1r pe6ople g3ood th5e the2를 입력받은 경우 "Fo1r the2 g3ood 4of th5e pe6ople"을 리턴해야 합니다', () => {
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toEqual(
      "Fo1r the2 g3ood 4of th5e pe6ople"
    );
  });

  test('t4his c2an da6y W1e al5l do3를 입력받은 경우 "W1e c2an do3 t4his al5l da6y"을 리턴해야 합니다', () => {
    expect(order("t4his c2an da6y W1e al5l do3")).toEqual(
      "W1e c2an do3 t4his al5l da6y"
    );
  });

  test("빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다", () => {
    expect(order("")).toEqual("");
  });
});
