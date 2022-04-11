const palindrome = require("./index");

describe("palindrome checking function", () => {
  it("should return a boolean", () => {
    expect(palindrome("eye")).toBe(true);
  });
  it("should check to see if a word is a palindrome", () => {
    expect(palindrome("eye")).toBe(true);
  });
});
