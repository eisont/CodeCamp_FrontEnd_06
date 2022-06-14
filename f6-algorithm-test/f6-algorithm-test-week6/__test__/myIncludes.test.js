const myIncludes = require("../src/myIncludes");

describe("myIncludes 테스트", () => {
  describe("배열이 주어질 때", () => {
    test("[1, 2, 3] 에 3이 주어질 경우 true를 리턴해야 합니다", () => {
      expect(myIncludes([1, 2, 3], 3)).toEqual(true);
    });

    test('[1, 2, "3"] 에 3이 주어질 경우 false를 리턴해야 합니다', () => {
      expect(myIncludes([1, 2, "3"], 3)).toEqual(false);
    });

    test("빈 배열에 1이 주어질 경우 false를 리턴해야 합니다", () => {
      expect(myIncludes([], 1)).toEqual(false);
    });
  });

  describe("문자열이 주어질 때", () => {
    test('"abcd"에 "e"가 주어질 경우 false를 리턴해야 합니다', () => {
      expect(myIncludes("abcd", "e")).toEqual(false);
    });

    test('"Hello world!"에 "H"가 주어질 경우 true를 리턴해야 합니다', () => {
      expect(myIncludes("Hello world!", "H")).toEqual(true);
    });
  });
});
