// ADDIZIONE
const formElement = document.forms.formEl.elements;

const resEl = document.querySelector(".risultato");

const GET = async (url) => {
  await fetch(url)
    // { "Access-Control-Allow-Origin": "http://localhost:3000" }
    .then((res) => res.json())
    .then((data) => (resEl.textContent = `Risultato: ${data}`));
};

const btnSum = formElement.btnCalc_sum;

btnSum.addEventListener("click", () => {
  const par1 = formElement.param1.value;
  const par2 = formElement.param2.value;
  let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;
  console.log(url);
  GET(url);
});

/* function func_somma() {
  const fai_somma = async () => {
    //param1 = prendere valore da html
    const url = "http://localhost:3000/somma?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);

    return await res.json();
  };
  let result = fai_somma();
  alert(result);
} */

// SOTTRAZIONE
function func_sottrai() {
  const fai_sottrazione = async () => {
    //param1 = prendere valore da html
    const url = "http://localhost:3000/sottrazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);

    return await res.json();
  };
  let result = fai_sottrazione();
  alert(result);
}

// MOLTIPLICAZIONE
function func_moltiplica() {
  const fai_moltiplicazione = async () => {
    //param1 = prendere valore da html
    const url = "http://localhost:3000/moltiplicazione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);

    return await res.json();
  };
  let result = fai_moltiplicazione();
  alert(result);
}

//DIVISIONE
function func_dividi() {
  const fai_divisione = async () => {
    //param1 = prendere valore da html
    const url = "http://localhost:3000/divisione?param1=2&param2=3";
    console.log("Async start");
    const res = await fetch(url);
    console.log(res);

    return await res.json();
  };
  let result = fai_divisione();

  alert(result);
}
