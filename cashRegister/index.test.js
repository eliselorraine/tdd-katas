const checkCashRegister = require("./index");

describe("the cash register function", () => {
  it("should return an object", () => {
    expect(
      typeof checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ])
    ).toBe("object");
  });
  it("should return exact change", () => {
    expect(
      checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ])
    ).toStrictEqual({ status: "OPEN", change: [["QUARTER", 0.5]] });
  });
  it("should return an object", () => {
    expect(
      checkCashRegister(3.26, 100, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ])
    ).toStrictEqual({
      status: "OPEN",
      change: [
        ["TWENTY", 60],
        ["TEN", 20],
        ["FIVE", 15],
        ["ONE", 1],
        ["QUARTER", 0.5],
        ["DIME", 0.2],
        ["PENNY", 0.04],
      ],
    });
  });
});
