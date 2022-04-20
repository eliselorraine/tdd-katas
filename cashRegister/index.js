const checkCashRegister = (price, cash, cid) => {
  let difference = cash - price;
  let change = changeDue(difference, cid);
  let transaction = { status: "OPEN", change };
  let total = getTotal(cid);

  if (price === cash) {
    transaction.status = "CLOSED";
    return transaction;
  } else if (total < difference || transaction.change.length === 0) {
    transaction.status = "INSUFFICIENT_FUNDS";
    transaction.change = [];
  } else if (total - difference === 0) {
    transaction.status = "CLOSED";
    transaction.change = cid;
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

const getCoins = (num) => {
  let coins = num.toString().split("");
  const decimal = coins.findIndex((el) => el === ".");
  if (decimal === -1) return 0;
  coins = parseFloat(coins.slice(decimal).join(""));
  return coins;
};

const changeDue = (diff, cid) => {
  let coins = getCoins(diff);
  let change = [];
  let remainder;
  for (let i = cid.length - 1; i > 0; i--) {
    let value = cid[i][1];
    let denomination = cid[i][0];
    switch (denomination) {
      case "ONE HUNDRED":
        if (value >= diff) {
          remainder = Math.floor(diff / 100);
          change.push(["ONE HUNDRED", remainder * 100]);
          diff -= remainder * 100;
        }
        break;
      case "TWENTY":
        if (value < diff) {
          change.push(["TWENTY", value]);
          diff -= value;
        } else {
          remainder = Math.floor(diff / 20);
          change.push(["TWENTY", remainder * 20]);
          diff -= remainder * 20;
        }
        break;
      case "TEN":
        if (value < diff) {
          change.push(["TEN", value]);
          diff -= value;
        } else {
          remainder = Math.floor(diff / 10);
          change.push(["TEN", remainder * 10]);
          diff -= remainder * 10;
        }
        break;
      case "FIVE":
        if (value < diff) {
          change.push(["FIVE", value]);
          diff -= value;
        } else {
          remainder = Math.floor(diff / 5);
          change.push(["FIVE", remainder * 5]);
          diff -= remainder * 5;
        }
        break;
      case "ONE":
        if (value < diff) {
          change.push(["ONE", value]);
          diff -= value;
        } else {
          remainder = Math.floor(diff / 1);
          change.push(["ONE", remainder * 1]);
          diff -= remainder * 1;
        }
        coins += Math.floor(diff);
        break;
      case "QUARTER":
        if (value < coins) {
          change.push(["QUARTER", value]);
          coins -= value;
        } else {
          remainder = Math.floor(coins / 0.25);
          change.push(["QUARTER", remainder * 0.25]);
          coins -= remainder * 0.25;
        }
        break;
      case "DIME":
        if (value < coins) {
          change.push(["DIME", value]);
          coins -= value;
        } else {
          remainder = Math.floor(coins / 0.1);
          change.push(["DIME", remainder * 0.1]);
          coins -= remainder * 0.1;
        }
        break;
      case "NICKEL":
        if (value < coins) {
          change.push(["NICKEL", value]);
          coins -= value;
        } else {
          remainder = Math.floor(coins / 0.05);
          change.push(["NICKEL", remainder * 0.5]);
          coins -= remainder * 0.05;
        }
      case "PENNY":
        if (cid[0][1] < coins) {
          change.push(["PENNY", cid[0][1]]);
          coins -= value;
        } else {
          const pennies = Math.round(coins / 0.01);
          change.push(["PENNY", pennies * 0.01]);
          coins -= pennies * 0.01;
        }
        break;
      default:
        break;
    }
  }

  return change.filter((arr) => arr[1] !== 0);
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
// for (let i = cid.length - 1; i >= 0; i--) {
//   let current = cid[i];
//   if (diff > 1 && current[1] < difference && current[1] !== 0) {
//     change.push(current);
//     difference = difference - current[1];
//   } else if (current[1] > difference && current[0] === "FIVE") {
//     const remainder = Math.floor(difference / 5);
//     if (remainder) {
//       change.push(["FIVE", remainder * 5]);
//       difference -= remainder * 5;
//     }
//   } else if (current[1] > difference && current[0] === "ONE") {
//     const remainder = Math.floor(difference / 1);
//     if (remainder) {
//       change.push(["ONE", remainder]);
//       difference -= remainder * 1;
//     }
//   } else if (current[1] > coins && current[0] === "QUARTER") {
//     const remainder = Math.floor(coins / 0.25);
//     if (remainder) {
//       change.push(["QUARTER", 0.25 * remainder]);
//       coins -= 0.25 * remainder;
//     }
//   } else if (current[1] > coins && current[0] === "DIME") {
//     const remainder = Math.floor(coins / 0.1);
//     if (remainder) {
//       change.push(["DIME", 0.1 * remainder]);
//       coins -= 0.1 * remainder;
//     }
//   } else if (coins > 0 && current[1] > coins && current[0] === "NICKEL") {
//     const remainder = Math.floor(coins / 0.05);
//     if (remainder) {
//       change.push(["NICKEL", 0.05 * remainder]);
//       coins -= 0.05 * remainder;
//     }
//   } else if (coins > 0 && current[1] >= coins && current[0] === "PENNY") {
//     if (coins < 0.05) {
//       change.push(["PENNY", pennies]);
//     } else {
//       change.push(["PENNY", coins]);
//     }
//   }
// }
