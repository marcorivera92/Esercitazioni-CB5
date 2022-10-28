// Esercizio 1 //

function calculator(x, y, operation = "") {
  switch (operation) {
    case "+":
      z = x + y;
      return z;

    case "-":
      z = x - y;
      return z;

    case "*":
      z = x * y;
      return z;

    case "/":
      z = x / y;
      return z;

    case "%":
      z = (x * y) / 100;
      return z;

    case "":
      alert("Please select a valid operation");
  }
}

// console.log(calculator(20, 50, "%")); // Esempio

// Esercizio 2 //

const character = {
  firstName: "Hans Florian",
  lastName: "Zimmer",
  birthday: "12 September 1957",
  nationality: "Germany",
  age: 65,
  occupation: "Composer, music producer",
  famousWorks: [
    "The Lion King",
    "Gladiator",
    "Inception",
    "The Dark Knight thrilogy",
  ],
  isAlive: true,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// console.log(character.fullName()); //

Object.freeze(character.firstName, character.lastName);

// console.log(Object.isFrozen(character.firstName, character.lastName)); //

// -----------------//

// Esercizio Avanzato // NON RIUSCITO, PERCHE'?

function calculator(x, y) {
  console.log("X: ", x);
  console.log("Y: ", y);
  // OCCHIO ALLO SPREAD OPERATOR
  console.log("Y: ", ...y);

  let z = 0;
  switch (x) {
    case "+":
      for (num of y) {
        z += num;
      }
      return z;

    case "-":
      z = y[0];
      for (let i = 1; i < y.length; i++) {
        z = z - y[i];
      }
      return z;

    case "*":
      z = y[0];
      for (let i = 1; i < y.length; i++) {
        z = z * y[i];
      }
      return z;

    case "/":
      z = y[0] / y[1];
      return z;
  } //
}

console.log(calculator("*", [10, 12, 14, 12, 34345, 35]));
