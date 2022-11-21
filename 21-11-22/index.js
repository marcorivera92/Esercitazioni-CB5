"use strict";

// ESERCIZIO 1 - 2
/* const argvs = process.argv;
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
} */

// ESERCIZIO 3 with Switch
const argvs = process.argv;
const argv = argvs.slice(3);
const operation = argvs[2];
const num1 = parseInt(argv[1]);
const num2 = parseInt(argv[2]);

switch (operation) {
  case "sum":
    let sum = 0;
    for (let i = 0; i < argv.length; i++) {
      sum = sum + parseInt(argv[i]);
    }

    console.log("Result: " + sum);
    break;

  case "subtract":
    console.log("Result: " + (num1 - num2));
    break;

  case "multiply":
    let multi = 1;
    for (let i = 0; i < argv.length; i++) {
      multi = multi * parseInt(argv[i]);
    }
    console.log("Result: " + multi);
    break;

  case "div":
    if (num2 === 0) {
      console.log("Error.. not valid");
      break;
    } else console.log("Result: " + num1 / num2);
    break;
}
