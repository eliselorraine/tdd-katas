const whatIsInAName = require("./index");

let array = whatIsInAName([{ first: "Romeo", last: "Montague" }], {
  first: "apple",
});

let shakespeare = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);

let fruits = whatIsInAName(
[
  { apple: 1 }, 
  { apple: 1 }, 
  { apple: 1, bat: 2 }
], 
{ apple: 1 }
);

let pairs = whatIsInAName(
  [
    { apple: 1, bat: 2 }, 
    { bat: 2 }, 
    { apple: 1, bat: 2, cookie: 2 }
  ],
  { apple: 1, bat: 2 }
);

console.log(pairs);

describe("Wherefore art thou", () => {
  it("returns an array", () => {
    expect(array).toStrictEqual([]);
  });

  it("should return the correct user", () => {
    const expected = [{ first: "Tybalt", last: "Capulet" }];
    expect(shakespeare).toStrictEqual(expected);
  });

  it("should return the correct fruits", () => {
    const expected = [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }];
    expect(fruits).toStrictEqual(expected);
  });

  it("should handle objects with multiple keys", () => {
    const expected = [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
    expect(fruits).toStrictEqual(expected);
  });
});
