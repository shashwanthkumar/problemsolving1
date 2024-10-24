// income tax

// const income = prompt("enter an Income")


// (income <= 250000)?console.log("No tax"):
// (income >250000 && income <=500000)?
// (income - 250000)*0.05 :
// (income > 500000 && income <= 1000000)?
// 12500 +(income - 500000) * 0.2 :
// 112500 + (income - 1000000)*0.3;

// console.log("total tax payable: ",tax)

const income = prompt("Enter your annual income:");

const tax = income <= 250000
  ? 0
  : income <= 500000
  ? (income - 250000) * 0.05
  : income <= 1000000
  ? 12500 + (income - 500000) * 0.2
  : 112500 + (income - 1000000) * 0.3;

console.log("Total tax payable:", tax);

//Shipping cost

const weight = parseFloat(prompt("Enter the weight of the parcel in kg:"));
const destination = prompt("Enter the destination (Local, National, or International):").toLocaleLowerCase();

let shippingCost = 0;

if (weight <= 1) {
  if (destination === "local") {
    shippingCost = 5;
  } else if (destination === "national") {
    shippingCost = 8;
  } else if (destination === "international") {
    shippingCost = 15;
  }
} else if (weight <= 5) {
  if (destination === "local") {
    shippingCost = 10;
  } else if (destination === "national") {
    shippingCost = 15;
  } else if (destination === "international") {
    shippingCost = 30;
  }
} else if (weight <= 10) {
  if (destination === "local") {
    shippingCost = 20;
  } else if (destination === "national") {
    shippingCost = 25;
  } else if (destination === "international") {
    shippingCost = 50;
  }
} else {
  if (destination === "local") {
    shippingCost = 30;
  } else if (destination === "national") {
    shippingCost = 35;
  } else if (destination === "international") {
    shippingCost = 70;
  }
}

console.log("Total shipping cost:", shippingCost);

//Electricity bill

const units = parseInt(prompt("Enter the number of units consumed:"));

const bill = units <= 100
  ? units * 1
  : units <= 300
  ? 100 + (units - 100) * 1.5
  : 100 + 200 * 1.5 + (units - 300) * 2;

console.log("Total electricity bill:", bill);