const bodyEl = document.querySelector("body");
const postContainer = document.querySelector(".hero");
const loader = document.querySelector(".loader");

// FETCH DATA

let i = 1;

const fetchUrl = () => {
  let postUrl = `https://jsonplaceholder.typicode.com/posts/${i}`;
  fetch(postUrl)
    .then((res) => res.json())
    .then((res) => createPost(res));

  if (i <= 1) {
    btnPrev.disabled = true;
    btnPrev.classList.add("disabled");
  } else {
    btnPrev.disabled = false;
    btnPrev.classList.remove("disabled");
  }

  if (i >= 10) {
    btnNext.disabled = true;
    btnNext.classList.add("disabled");
  } else {
    btnNext.disabled = false;
    btnNext.classList.remove("disabled");
  }
};
// Card HTML constants
const card = document.createElement("div");
const wrapper = document.createElement("div");
const cardId = document.createElement("h3");
const cardTitle = document.createElement("h2");
const cardText = document.createElement("p");

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

// Card Append data
const createPost = (data) => {
  card.className = "card";
  wrapper.className = "wrapper";
  cardTitle.className = "post_title";
  cardId.className = "post_id";
  cardText.className = "post_text";
  cardId.textContent = "POST #" + data.id;
  cardTitle.textContent = data.title;
  cardText.textContent = `"${data.body}"`;

  // Append card elements to HTML body
  wrapper.append(cardId, cardTitle, cardText);
  card.append(wrapper);

  postContainer.append(card);

  hideLoading();
};

// BUTTONS PREV/NEXT
const getPost = (instruction) => {
  if (!instruction) {
    instruction = 1;
  } else {
    instruction = instruction.toLowerCase();
  }

  switch (instruction) {
    case "←":
      i--;
      break;
    case "→":
      i++;
      break;
  }
};

btnNext.addEventListener("click", (e) => {
  displayLoading();
  let instruction = e.target.textContent;
  getPost(instruction);
  fetchUrl(instruction);
});

btnPrev.addEventListener("click", (e) => {
  displayLoading();
  let instruction = e.target.textContent;
  getPost(instruction);
  fetchUrl(instruction);
});

// LOADER
const displayLoading = () => {
  loader.style.display = "block";
};

const hideLoading = () => {
  loader.style.display = "none";
};

// FIRST POST ON LOAD
window.onload = fetchUrl();
