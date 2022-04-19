const telephoneCheck = require("./index");

describe("the telephone check function", () => {
  it("should return true for valid US phone numbers", () => {
    expect(telephoneCheck("1 555-555-5555")).toBe(true);
  });
  it("should handle multiple non-numerical characters", () => {
    expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
  });
  it("should handle only numbers", () => {
    expect(telephoneCheck("5555555555")).toBe(true);
  });
  it("should handle only hyphens", () => {
    expect(telephoneCheck("555-555-5555")).toBe(true);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("(555)555-5555")).toBe(true);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("1(555)555-5555")).toBe(true);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("555-5555")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("5555555")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("1 555)555-5555")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("1 555 555 5555")).toBe(true);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("1 456 789 4444")).toBe(true);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("123**&!!asdf#")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("55555555")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("(6054756961)")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("2 (757) 622-7382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("0 (757) 622-7382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("-1 (757) 622-7382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("2 757 622-7382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("10 (757) 622-7382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("27576227382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("(275)76227382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("2(757)6227382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("2(757)622-7382")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("555)-555-5555")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("(555-555-5555")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("(555)5(55?)-5555")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("55 55-55-555-5")).toBe(false);
  });
  it("should handle multiple formats", () => {
    expect(telephoneCheck("11 555-555-5555")).toBe(false);
  });
});
