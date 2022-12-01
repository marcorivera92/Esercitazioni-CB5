const body = document.querySelector("body");
const url = `http://localhost:3000/attori`;
const deleteUrl = `http://localhost:3000/attore`;

fetch(url)
  .then((resp) => resp.json())
  .then((res) => createCard(res));

const createCard = (items) => {
  for (let item of items) {
    const cardContainer = document.querySelector(".attori_wrapper");
    const card = document.createElement("div");
    const img = document.createElement("div");
    const name = document.createElement("h3");
    const surname = document.createElement("h3");
    const birthday = document.createElement("p");
    const btnDelete = document.createElement("button");
    const id = item.id;

    card.className = "card";
    img.className = "card_img";
    name.className = "card_name";
    surname.className = "card_surname";
    birthday.className = "card_birthday";
    btnDelete.className = "btn_delete";

    name.textContent = "Name: " + item.nome;
    surname.textContent = "Surname: " + item.cognome;
    birthday.textContent = "Birthday: " + item.birthday;
    btnDelete.textContent = "Remove";

    card.append(name, surname, birthday, btnDelete);
    cardContainer.append(card);

    // DELETE BUTTON
    btnDelete.addEventListener("click", () => {
      DELETE(deleteUrl, item.id).then(() => location.reload());
    });
  }
};

// DELETE method
const DELETE = async (url, id) => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ id: id }),
  });
  return res.json();
};

// CREATE method
const POST = async (url, body_message) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
  return res.json();
};

function createActor(body_message) {
  const createUrl = `http://localhost:3000/attore`;

  return POST(createUrl, body_message);
}

const create_btn = document.getElementById("create-btn");
const idEl = document.getElementById("id");
const nameEl = document.getElementById("nome");
const surnameEl = document.getElementById("cognome");
const birthdayEl = document.getElementById("data_nascita");

create_btn.addEventListener("click", (e) => {
  e.preventDefault();
  const actor = {
    id: idEl.value,
    nome: nameEl.value,
    cognome: surnameEl.value,
    data_nascita: birthdayEl.value,
  };
  createActor(actor).then(() => location.reload());
});

// PUT
const PUT = async (url, body_message) => {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(body_message),
  });
  return res.json();
};
