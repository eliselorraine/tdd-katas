const whatIsInAName = require("./index");

describe("Wherefore art thou", () => {
  let array = whatIsInAName([{ first: "Romeo", last: "Montague" }], {
    first: "apple",
  });
  it("returns an array", () => {
    expect(array).toStrictEqual([]);
  });

  it("should return the correct user", () => {
    let shakespeare = whatIsInAName(
      [
        { first: "Romeo", last: "Montague" },
        { first: "Mercutio", last: null },
        { first: "Tybalt", last: "Capulet" },
      ],
      { last: "Capulet" }
    );
    const expected = [{ first: "Tybalt", last: "Capulet" }];
    expect(shakespeare).toStrictEqual(expected);
  });

  it("should handle objects in the collection with multiple keys", () => {
    let fruits = whatIsInAName(
      [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }],
      { apple: 1 }
    );
    const expected = [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }];
    expect(fruits).toStrictEqual(expected);
  });

  it("should handle objects in the source with multiple keys", () => {
    let pairs = whatIsInAName(
      [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
      { apple: 1, bat: 2 }
    );
    const expected = [
      { apple: 1, bat: 2 },
      { apple: 1, bat: 2, cookie: 2 },
    ];
    expect(pairs).toStrictEqual(expected);
  });

  it("should not be affected by order of key-value pairs", () => {
    let morePairs = whatIsInAName(
      [
        { "apple": 1, "bat": 2 }, 
        { "apple": 1 }, 
        { "apple": 1, "bat": 2, "cookie": 2 }
      ], 
      { "apple": 1, "cookie": 2 }
      ) 
      const expected = [{ "apple": 1, "bat": 2, "cookie": 2 }]
      expect(morePairs).toStrictEqual(expected);
  })
});
