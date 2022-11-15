import { c, q, GET, POST, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

// Take Form from HTML
const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemon_list");

// Registering data by clicking Submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(),
    name: element.poke_name.value,
    type: element.poke_type.value,
  };

  // Print results on JSON file
  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Print data results on screen
window.onload = GET(url).then((res) =>
  res.map(
    (pokemon) =>
      (ul.innerHTML += `<li>Name: ${pokemon.name} || Type: ${pokemon.type}</li>`)
  )
);
