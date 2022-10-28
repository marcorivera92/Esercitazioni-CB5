function addizione() {
  let a = 1.0 * document.getElementById("a").value;
  let b = 1.0 * document.getElementById("b").value;
  document.getElementById("risultato").value = a + b;

  console.log("risultato addizione: ", (value = a + b));

  // 1.0* = converte stringa -> numero
}

function sottrazione() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("risultato").value = a - b;

  console.log("risultato sottrazione: ", (value = a - b));
}

function moltiplicazione() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("risultato").value = a * b;

  console.log("risultato moltiplicazione: ", (value = a * b));
}

function divisione() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("risultato").value = a / b;

  console.log("risultato divisione: ", (value = a / b));
}
