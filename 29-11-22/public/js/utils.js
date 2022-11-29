const body = document.querySelector("body");

const createCard = (items) => {
  for (let item of items) {
    const cardContainer = document.querySelector(".attori_wrapper");
    const card = document.createElement("div");
    const img = document.createElement("div");
    const name = document.createElement("h3");
    const surname = document.createElement("h3");
    const birthday = document.createElement("p");

    card.className = "card";
    img.className = "card_img";
    name.className = "card_name";
    surname.className = "card_surname";
    birthday.className = "card_birthday";

    name.textContent = "Name: " + item.nome;
    surname.textContent = "Surname: " + item.cognome;
    birthday.textContent = "Birthday: " + item.birthday;

    card.append(name, surname, birthday);
    cardContainer.append(card);
  }
};

const url = `http://localhost:3000/attori`;

fetch(url)
  .then((resp) => resp.json())
  .then((res) => createCard(res));
