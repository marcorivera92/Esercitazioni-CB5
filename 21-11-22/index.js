"use strict";

const argvs = process.argv;
const argv = argvs.slice(2);
const operation = argv[0];
const num1 = parseInt(argv[1]);
const num2 = parseInt(argv[2]);

if (!isNaN(num1) && isNaN(num2)) {
  console.log("Error.. insert valid numbers");
} else if (operation === "sum") {
  console.log("Result: " + (num1 + num2));
} else if (operation === "subtract") {
  console.log("Result: " + (num1 - num2));
} else if (operation === "multiply") {
  console.log("Result: " + num1 * num2);
} else if (operation === "divide") {
  if (num2 == 0) {
    console.log("Error.. not valid");
  } else {
    console.log("Result: " + num1 / num2);
  }
}
