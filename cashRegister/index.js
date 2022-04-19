const checkCashRegister = (price, cash, cid) => {
  let transaction = { status: "OPEN", change: cid };
  let difference = 0;

  if (price === cash) {
    transaction.status = "CLOSED";
    return transaction;
  } else {
    difference = cash - price;
    transaction.change = changeDue(difference, cid);
  }

//   console.log(transaction, difference);
  return transaction;
};

const changeDue = (diff, cid) => {
  let difference = diff;
  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    let current = cid[i];

    if (current[1] < difference) {
      change.push(current);
      difference = difference - current[1];
    }
    //   return change;
  }
  //   if (diff % 0.25 === 0) {
  //     change.push(["QUARTER", diff]);
  //   }

  return change;
};

console.log(
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
);

const expected = {
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
};

module.exports = checkCashRegister;
