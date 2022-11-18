import { c, q, GET, POST, DELETE, uuidv4, PATCH } from "./utils.js";
const url = "http://localhost:3000/pokemon";

let id;

// FORM SUMBIT
const form = document.forms.pokemon;
const element = form.elements;

const ul = q(".pokemonList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    id: id + 1,
    name: element.pkmName.value,
    type: element.pkmType.value,
  };

  POST(url, data)
    .then((response) => response.json())
    .then((res) => {
      console.log("Success:", res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// FORM EDIT
const formEdit = document.forms.pokemon_edit;
const elementsEdit = formEdit.elements;

formEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = elementsEdit.pkmId.value;

  const data = {
    name: elementsEdit.pkmName.value,
    type: elementsEdit.pkmType.value,
  };

  PATCH(url, id, data)
    .then(() => location.reload())
    .catch((e) => console.log(e));
});

// CREATE POKEMON CARD
const createCard = (url, id, resPoke) => {
  const pokeGalleryEl = q(".poke-gallery");
  const imgEl = c("img");
  const cardEl = c("div");
  const cardBtn = c("div");
  const nameEl = c("h4");
  const idEl = c("h4");
  const typeEl = c("h5");
  const deleteBtnEl = c("button");
  const editBtnEl = c("button");

  cardEl.className = "poke-card";
  cardEl.classList.add(`bg-${resPoke.type}`);
  imgEl.className = "poke-img";
  nameEl.className = "poke-name";
  idEl.className = "poke-id";
  typeEl.className = "poke-type";
  cardBtn.className = "card_buttons";
  deleteBtnEl.className = "poke-btn";
  editBtnEl.className = "poke-btn";

  nameEl.textContent = resPoke.name;
  idEl.textContent = `#${resPoke.id}`;
  typeEl.textContent = `Type: ${resPoke.type}`;
  deleteBtnEl.textContent = "Remove";
  editBtnEl.textContent = "Edit";

  cardBtn.append(deleteBtnEl, editBtnEl);
  cardEl.append(imgEl, nameEl, idEl, typeEl, cardBtn);
  pokeGalleryEl.append(cardEl);

  // DELETE BUTTON
  deleteBtnEl.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });
  // DOUBLE CLICK TO EDIT
  cardEl.addEventListener("dblclick", () => {
    const formEdit = document.forms.pokemon_edit;
    const elementsEdit = formEdit.elements;

    elementsEdit.pkmId.value = id;
    elementsEdit.pkmName.value = nameEl.textContent;
    elementsEdit.pkmType.value = typeEl.textContent;
  });
};

// DISPLAY IN HTML
window.onload = GET(url).then((res) => {
  id = res[res.length - 1].id;
  console.log(id);
  res.map((pkm) => {
    createCard(url, pkm.id, pkm);
  });
});
