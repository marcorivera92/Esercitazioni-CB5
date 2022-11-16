const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

// Fetch -> GET data method
const GET = async (URL) => {
  const res = await fetch(URL);
  return await res.json();
};

// Fetch -> POST data method
const POST = async (URL, body) => {
  return await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

// Fetch -> DELETE data method
const DELETE = async (URL, id) => {
  return await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// API
/**
 * Create an unique hash code
 * @returns string
 */
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

// Create Pokemon Card
const createCard = (url, parent, name, type, id) => {
  const pokemonList = q(".pokemon_list");
  const wrapperEl = c("li");
  const nameEl = c("p");
  const typeEl = c("p");
  const btnDelete = c("button");

  btnDelete.className = "btn_delete";

  nameEl.textContent = name;
  typeEl.textContent = type;
  btnDelete.textContent = "🗑";

  btnDelete.addEventListener("click", () => {
    DELETE(url, id).then(() => location.reload());
  });

  wrapperEl.append(nameEl, typeEl, btnDelete);
  pokemonList.append(wrapperEl);
};

// Export functions
export { c, q, createCard, GET, POST, DELETE, uuidv4 };
