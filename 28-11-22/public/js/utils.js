// FUNZIONI OPERAZIONI
const formElement = document.forms.calculator.elements;
const param1 = formElement.param1;
const param2 = formElement.param2;
const btn = document.querySelectorAll(".btn");
const result = document.querySelector("h2");

// console.log(btn);

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", (e) => {
    e.preventDefault();
    const par1 = param1.value;
    const par2 = param2.value;
    const par3 = btn[i].classList[1];
    // console.log(btn[i]);

    let url = `http://localhost:3000/calcolatrice?param1=${par1}&param2=${par2}&param3=${par3}`;

    GET(url);
  });
}

const GET = async (url) => {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => (result.textContent = "Result: " + data));
};
