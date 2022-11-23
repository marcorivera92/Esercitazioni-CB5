"use strict";

function sum(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

function subtract(num1, num2) {
  return parseInt(num1) - parseInt(num2);
}

function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
}

function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
}

module.exports.sum = sum;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
