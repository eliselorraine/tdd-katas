const smallestCommons = require("./index");

describe("the smallest commons function", () => {
  it("should return a number", () => {
    expect(smallestCommons([1, 5])).not.toBeNaN();
  });
  it("should return the smallest common multiple", () => {
    expect(smallestCommons([1, 5])).toBe(60);
  });
});
