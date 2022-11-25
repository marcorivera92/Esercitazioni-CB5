// FUNZIONI OPERAZIONI
const formElement = document.forms.formEl.elements;
const risEl = document.querySelector("h2");
let btn;

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (risEl.textContent = "Risultato: " + data));
};

if (formElement[2].name === "btnSum") {
  btn = formElement.btnSum;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/somma?param1=${par1}&param2=${par2}`;

    GET(url);
  });
} else if (formElement[2].name === "btnSub") {
  btn = formElement.btnSub;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/sottrazione?param1=${par1}&param2=${par2}`;

    GET(url);
  });
} else if (formElement[2].name === "btnMol") {
  btn = formElement.btnMol;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/moltiplicazione?param1=${par1}&param2=${par2}`;

    GET(url);
  });
} else if (formElement[2].name === "btnDiv") {
  btn = formElement.btnDiv;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = formElement.param1.value;
    const par2 = formElement.param2.value;
    let url = `http://localhost:3000/divisione?param1=${par1}&param2=${par2}`;

    GET(url);
  });
}
