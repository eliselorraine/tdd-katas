const checkCashRegister = (price, cash, cid) => {
  let difference = cash - price;
  let transaction = { status: "OPEN", change: changeDue(difference, cid) };
  let total = getTotal(cid);

  if (price === cash) {
    transaction.status = "CLOSED";
    return transaction;
  } else if (total < difference || transaction.change.length === 0) {
    transaction.status = "INSUFFICIENT_FUNDS";
    transaction.change = [];
  } else if (total - difference === 0) {
    transaction.status = "CLOSED";
  }
  return transaction;
};

const getTotal = (cid) => {
  let amounts = [];
  cid.forEach((arr) => amounts.push(arr[1]));
  let total = 0;

  for (let i = amounts.length - 1; i >= 0; i--) {
    total += amounts[i];
  }

  return total;
};

const changeDue = (diff, cid) => {
  let coins = diff.toString();
  const pennies = parseFloat(".0" + coins[coins.length - 1]);
  coins = parseFloat(coins.slice(coins.length - 3));
  console.log(coins)
  let difference = diff;
  let change = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    let current = cid[i];
    if (difference > 1 && current[1] < difference && current[1] !== 0) {
      change.push(current);
      difference = difference - current[1];
    //   current[1] = 0;
    } else if (current[1] > difference && current[0] === "FIVE") {
      const remainder = Math.floor(difference / 5);
      if (remainder) {
        change.push(["FIVE", remainder * 5]);
        difference -= remainder * 5;
        // current[1] -= remainder * 5;
      }
    } else if (current[1] > difference && current[0] === "ONE") {
      const remainder = Math.floor(difference / 1);
      if (remainder) {
        change.push(["ONE", remainder]);
        difference -= remainder * 1;
        // current[1] -= remainder * 1;
      }
    } else if (current[1] > coins && current[0] === "QUARTER") {
      const remainder = Math.floor(coins / 0.25);
      if (remainder) {
        change.push(["QUARTER", 0.25 * remainder]);
        coins -= 0.25 * remainder;
        // current[1] -= remainder * 0.25;
      }
    } else if (current[1] > coins && current[0] === "DIME") {
      const remainder = Math.floor(coins / 0.1);
      if (remainder) {
        change.push(["DIME", 0.1 * remainder]);
        coins -= 0.1 * remainder;
        // current[1] -= remainder * 0.1;
      }
    } else if (coins > 0 && current[1] > coins && current[0] === "NICKEL") {
      const remainder = Math.floor(coins / 0.05);
      if (remainder) {
        change.push(["NICKEL", 0.05 * remainder]);
        coins -= 0.05 * remainder;
        // current[1] -= remainder * 0.05;
      }
    } else if (coins > 0 && current[1] >= coins && current[0] === "PENNY") {
      change.push(["PENNY", coins]);
    }
  }

  console.log(cid)
  return change;
};

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
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
