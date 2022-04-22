const checkCashRegister = (price, cash, cid) => {
  const difference = cash - price;
  const total = getTotal(cid);
  let change = changeDue(difference, cid);
  let transaction = { status: "OPEN", change };

  if (price === cash) {
    transaction.status = "CLOSED";
    return transaction;
  } else if (total < difference || !transaction.change.length) {
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
  for (let i = cid.length - 1; i >= 0; i--) {
    let value = cid[i][1];
    let denomination = cid[i][0];
    switch (denomination) {
      case "ONE HUNDRED":
        if (value >= diff) {
          remainder = Math.floor(diff / 100);
          change.push([denomination, remainder * 100]);
          diff -= remainder * 100;
        } else {
          change.push([denomination, value]);
          diff -= value;
        }
        break;
      case "TWENTY":
        if (value < diff) {
          change.push([denomination, value]);
          diff -= value;
        } else {
          remainder = Math.floor(diff / 20);
          change.push([denomination, remainder * 20]);
          diff -= remainder * 20;
        }
        break;
      case "TEN":
        if (value < diff) {
          change.push([denomination, value]);
          diff -= value;
        } else {
          remainder = Math.floor(diff / 10);
          change.push([denomination, remainder * 10]);
          diff -= remainder * 10;
        }
        break;
      case "FIVE":
        if (value < diff) {
          change.push([denomination, value]);
          diff -= value;
        } else {
          remainder = Math.floor(diff / 5);
          change.push([denomination, remainder * 5]);
          diff -= remainder * 5;
        }
        break;
      case "ONE":
        if (value < diff) {
          change.push([denomination, value]);
          diff -= value;
        } else {
          remainder = Math.floor(diff / 1);
          change.push([denomination, remainder * 1]);
          diff -= remainder * 1;
        }
        coins += Math.floor(diff);
        break;
      case "QUARTER":
        if (value < coins) {
          change.push([denomination, value]);
          coins -= value;
        } else {
          remainder = Math.floor(coins / 0.25);
          change.push([denomination, remainder * 0.25]);
          coins -= remainder * 0.25;
        }
        break;
      case "DIME":
        if (value < coins) {
          change.push([denomination, value]);
          coins -= value;
        } else {
          remainder = Math.floor(coins / 0.1);
          change.push([denomination, remainder * 0.1]);
          coins -= remainder * 0.1;
        }
        break;
      case "NICKEL":
        if (value < coins) {
          change.push([denomination, value]);
          coins -= value;
        } else {
          remainder = Math.floor(coins / 0.05);
          change.push([denomination, remainder * 0.5]);
          coins -= remainder * 0.05;
        }
      case "PENNY":
        if (value < coins) {
          change.push(["PENNY", 0]);
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

module.exports = checkCashRegister;

// const addChange = (den, val, amount, arr, worth) => {
//   if (val < amount) {
//     arr.push([den, val]);
//     amount -= val;
//   } else {
//     let remainder = Math.floor(amount / worth);
//     arr.push([den, remainder * worth]);
//     amount -= remainder * worth;
//   }
//   return amount; 
// };