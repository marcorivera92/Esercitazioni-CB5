// Esercizio 1 //
const identity = ["Marco", "Rivera", "30 anni", "Bachelor of Arts"];

console.log(identity);

// Esercizio 2 (i) //

identity.splice(2, 1);

console.log(identity);

// --------- (ii) --------- //

identity.splice(2, 0, "06/03/1992");

console.log(identity);

// --------- (iii) --------- //

identity[0] = identity[0].toUpperCase();
identity[1] = identity[1].toUpperCase();
console.log(identity);

// --------- Avanzato --------- //

let triangle = "########";

for (let i = 0; i <= 6; i++) {
  triangle = triangle.slice(1);
  console.log(triangle);
}
