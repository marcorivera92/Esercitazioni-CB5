const bodyEl = document.querySelector("body");
const pokemonContainer = document.querySelector(".pokemon_container");

for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((res) => res.json())
    .then((pokemon) => createPokemonCard(pokemon));
}

const PokedexEl = document.querySelector("pokemon_container");

const createPokemonCard = (data) => {
  const cardBlock = document.createElement("div");
  const cardEl = document.createElement("div");
  const cardImgEl = document.createElement("img");
  const cardNameEl = document.createElement("h2");
  const cardDesc = document.createElement("div");
  const cardIdEl = document.createElement("h4");
  const cardTypeEl = document.createElement("p");

  cardBlock.className = "card_block";
  cardEl.className = "card";
  cardDesc.className = "card_info";
  cardImgEl.setAttribute("src", data.sprites["front_default"]);
  cardImgEl.setAttribute("alt", data.name);
  cardNameEl.textContent = data.name;
  cardIdEl.textContent = "#" + data.id;
  cardTypeEl.textContent = "Type: " + data.types.map((type) => type.type.name);

  const colorCard = colors[data.types[0].type.name];
  cardBlock.style.background = colorCard;

  cardEl.append(cardImgEl);
  cardDesc.append(cardIdEl, cardNameEl, cardTypeEl);
  cardBlock.append(cardEl, cardDesc);
  pokemonContainer.append(cardBlock);
  bodyEl.append(pokemonContainer);
};

const colors = {
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  ghost: "#705898",
  ice: "#98d8d8",
};
