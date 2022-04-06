const pairElement = require("./index");

describe("the pairElement function", () => {
  it("should return the correct pairs", () => {
    const expected = [
      ["A", "T"],
      ["T", "A"],
      ["C", "G"],
      ["G", "C"],
      ["A", "T"],
    ];
    expect(pairElement("ATCGA")).toStrictEqual(expected);
  });
  it("should return the correct pairs", () => {
    const expected = [
      ["T", "A"],
      ["T", "A"],
      ["G", "C"],
      ["A", "T"],
      ["G", "C"],
    ];
    expect(pairElement("TTGAG")).toStrictEqual(expected);
  });
  it("should return the correct pairs", () => {
    const expected = [
      ["C", "G"],
      ["T", "A"],
      ["C", "G"],
      ["T", "A"],
      ["A", "T"],
    ];
    expect(pairElement("CTCTA")).toStrictEqual(expected);
  });
});
