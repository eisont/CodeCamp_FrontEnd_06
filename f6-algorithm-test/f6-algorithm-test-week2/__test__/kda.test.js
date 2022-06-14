const kda = require("../src/kda");

describe("kda", () => {
  test('[0, 5, 3]을 입력받은 경우 "hasu"를 리턴해야 합니다 ', () => {
    expect(kda([0, 5, 3])).toEqual("hasu");
  });

  test('[12, 4, 5]을 입력받은 경우 "gosu"를 리턴해야 합니다 ', () => {
    expect(kda([12, 4, 5])).toEqual("gosu");
  });

  test('[0, 0, 1]을 입력받은 경우 "hasu"를 리턴해야 합니다 ', () => {
    expect(kda([0, 0, 1])).toEqual("hasu");
  });
});
