const palindrome = require("./index");

describe("palindrome checking function", () => {
  it("should return a boolean", () => {
    expect(palindrome("eye")).toBe(true);
  });
  it("should check to see if a word is a palindrome", () => {
    expect(palindrome("eye")).toBe(true);
  });
  it("should not count non-word characters", () => {
    expect(palindrome("_eye")).toBe(true);
  });
  it("should not count non-word characters", () => {
    expect(palindrome("race car")).toBe(true);
  });
  it("should return false if the string is not a palindrome", () => {
    expect(palindrome("not a palindrome")).toBe(false);
  });
  it("should be case insensitive", () => {
    expect(palindrome("A man, a plan, a canal. Panama")).toBe(true);
  });
  it("should handle whitespace", () => {
    expect(palindrome("never odd or even")).toBe(true);
  });
  it("should handle non-palindromes", () => {
    expect(palindrome("nope")).toBe(false);
  });
  it("should handle near-palindromes", () => {
    expect(palindrome("almostomla")).toBe(false);
  });
  it("should include numbers", () => {
    expect(palindrome("My age is 0, 0 si ega ym.")).toBe(true);
  });
  it("should include numbers", () => {
    expect(palindrome("1 eye for of 1 eye.")).toBe(false);
  });
  it("should handle non-word palindromes", () => {
    expect(palindrome("0_0 (: /-\ :) 0-0")).toBe(true);
  });

  it("should handle non-word palindromes", () => {
    expect(palindrome("five|\_/|four")).toBe(false);
  });
  
});
