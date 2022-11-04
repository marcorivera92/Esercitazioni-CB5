const products = [
  {
    id: 1,
    title: "Air Jordan 1 Retro High Off-White Chicago The Ten",
    image:
      "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Off-White-Chicago-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1641327826",
    description:
      "The Off-White x Air Jordan 1 Retro High OG was one of the most highly anticipated footwear collaborations of 2017",
    price: 8.252,
  },
  {
    id: 2,
    title: "Jordan 4 Retro UNDFTD",
    image:
      "https://www.thehypeplace.com/1380-large_default/air-jordan-4-retro-undefeated.jpg",
    description:
      "The Undefeated model is rather simple and features an Olive,Black and Orange color-way, very similar to the retro version that was released after the Air Jordan Undefeated IV. On the inside of the tag, an Undefeated tag can be seen.",
    price: 11.084,
  },
  {
    id: 3,
    title: "Jordan 1 Retro Low OG SP - Travis Scott",
    image:
      "https://images.stockx.com/360/Air-Jordan-1-Retro-Low-Travis-Scott/Images/Air-Jordan-1-Retro-Low-Travis-Scott/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1634915513&h=320&q=80",
    description:
      "This AJ 1 Low features a black upper with dark brown overlays and red accents on the branding. Much like the Air Jordan 1 High Travis Scott, La Flame added his signature backwards Swoosh logo on the lateral side.",
    price: 1.692,
  },
  {
    id: 4,
    title: "Jordan 4 Retro - Eminem Carhartt",
    image:
      "https://images.stockx.com/360/Air-Jordan-4-Retro-Eminem-Carhartt/Images/Air-Jordan-4-Retro-Eminem-Carhartt/Lv2/img01.jpg?fm=avif&auto=compress&w=480&dpr=1&updated_at=1635274863&h=320&q=80",
    description:
      "In 2015, rapper Eminem and iconic workwear brand Carhartt teamed up with the Jordan brand to create the exclusive Eminem x Carhartt x Air Jordan IV ‘Black Chrome’. Originally gifted to the rapper’s friends and family, and additional ten pairs were created to sell at an eBay Auction to benefit the Marshall Mathers Foundation.",
    price: 23.595,
  },
  {
    id: 5,
    title: "Louis Vuitton x Nike Air Force 1 Blue",
    image:
      "https://imgstatic.soldoutservice.com/2mJAUqHO/d27f152d872/s2000/louis-vuitton-x-nike-air-force-1-low-blue-cbr8j.jpg",
    description:
      "In 2022, 40 years since the Air Force 1 was introduced, a culmination of the rich history of the silhouette was realized with the introduction of the Louis Vuitton x Nike “Air Force 1” by Virgil Abloh. Released posthumously, Abloh’s work seamlessly connected the decades of prominence of Nike’s famed sneaker.",
    price: 14.245,
  },
];

const bodyEl = document.querySelector("body");

const shopEl = document.querySelector(".shop");

const createCard = (data) => {
  const cardEl = document.createElement("div");
  const cardImgEl = document.createElement("img");
  const cardTitleEl = document.createElement("h4");
  const cardDesc = document.createElement("div");
  const cardParEl = document.createElement("h6");
  const cardPrice = document.createElement("h6");
  const cardBlock = document.createElement("div");
  const cardPriceBox = document.createElement("div");

  cardBlock.className = "card_block";
  cardEl.className = "card";
  cardDesc.className = "card_info";
  cardPriceBox.className = "card_price";
  cardImgEl.setAttribute("src", data.image);
  cardImgEl.setAttribute("alt", data.title);
  cardTitleEl.textContent = data.title;
  cardParEl.textContent = data.description;
  cardPrice.textContent = "Est. Value: " + "$" + data.price;

  cardEl.append(cardImgEl, cardTitleEl);
  cardDesc.append(cardParEl);
  cardBlock.append(cardEl, cardDesc, cardPriceBox);
  cardPriceBox.append(cardPrice);
  shopEl.append(cardBlock);
};
products.map((product) => createCard(product, shopEl));

// PARALLAX ANIMATION

let elements_to_watch = document.querySelectorAll(".watch");
// CALLBACK
let callback = function (items) {
  items.forEach((item) => {
    if (item.isIntersecting) {
      item.target.classList.add("in-page");
    } else {
      item.target.classList.remove("in-page");
    }
  });
};

// OBSERVER
let observer = new IntersectionObserver(callback, { threshold: 0.5 });
// APPLY
elements_to_watch.forEach((element) => {
  observer.observe(element);
});

// MENU TRIGGER

let trigger = document.querySelector(".menu_trigger");
trigger.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("menu_open");
});
