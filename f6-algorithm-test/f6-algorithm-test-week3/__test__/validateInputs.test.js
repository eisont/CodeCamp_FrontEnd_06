const validateInputs = require("../src/validateInputs");

describe("inputs 객체 검증하기", () => {
  test("inputs 객체에 빈 문자열이 있을 때 false를 리턴해야 합니다", () => {
    const inputs = { title: "", contents: "내용" };
    expect(validateInputs(inputs)).toEqual(false);
  });

  test("inputs 객체에 0이 있을 때 false를 리턴해야 합니다", () => {
    const inputs = { price: 0, contents: "내용" };
    expect(validateInputs(inputs)).toEqual(false);
  });

  test('inputs 객체에 0과 ""이 있을 때 false를 리턴해야 합니다', () => {
    const inputs = { title: "", contents: "내용", price: 0 };
    expect(validateInputs(inputs)).toEqual(false);
  });

  test('inputs 객체에 0과 ""이 없을 때 true를 리턴해야 합니다', () => {
    const inputs = {
      title: "제목",
      contents: "내용",
      writer: "작성자",
      price: 123,
    };
    expect(validateInputs(inputs)).toEqual(true);
  });
});
