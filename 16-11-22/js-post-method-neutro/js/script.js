import { q, createCard, GET, POST, DELETE, uuidv4 } from "./utils.js";
const url = "http://localhost:3000/pokemon";

// Take Form from HTML
const form = document.forms.pokemon;
const element = form.elements;
const ulPoke = q(".pokemon_list");

// Registering data by clicking Submit button
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: uuidv4(),
    name: element.poke_name.value,
    type: element.poke_type.value,
  };

  // Print results on JSON file
  POST(url, data).then(() => location.reload());
});

// Print data results on screen
window.onload = GET(url).then((res) =>
  res.map((pokemon) => {
    try {
      createCard(url, ulPoke, pokemon.name, pokemon.type, pokemon.id);
    } catch (error) {
      console.log(error);
    }
  })
);
