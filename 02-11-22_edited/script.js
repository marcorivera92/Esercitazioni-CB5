const artists = [
  {
    artistName: "Drake",
    nationality: "Canada",
    totalTracks: "262",
    streams: "50,817,785,409",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/220px-Drake_July_2016.jpg",
  },

  {
    artistName: "Bad Bunny",
    nationality: "Puerto Rico",
    totalTracks: "163",
    streams: "45,937,255,709",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg/220px-Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg",
  },

  {
    artistName: "Ed Sheeran",
    nationality: "England",
    totalTracks: "244",
    streams: "38,657,884,240",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/220px-Ed_Sheeran-6886_%28cropped%29.jpg",
  },
  {
    artistName: "The Weeknd",
    nationality: "Canada",
    totalTracks: "186",
    streams: "35,501,222,262",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Abel_Makkonen_Tesfaye_The_Weeknd.png/319px-Abel_Makkonen_Tesfaye_The_Weeknd.png",
  },
  {
    artistName: "Taylor Swift",
    nationality: "U.S.",
    totalTracks: "323",
    streams: "33,495,287,052",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png/337px-191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png",
  },
  {
    artistName: "Justin Bieber",
    nationality: "Canada",
    totalTracks: "225",
    streams: "S32,904,774,922",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/336px-Justin_Bieber_in_2015.jpg",
  },
  {
    artistName: "Ariana Grande",
    nationality: "U.S.",
    totalTracks: "181",
    streams: "32,647,329,982",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_Red_Carpet_2020.png/334px-Ariana_Grande_Grammys_Red_Carpet_2020.png",
  },
  {
    artistName: "Eminem",
    nationality: "U.S.",
    totalTracks: "300",
    streams: "30,973,887,714",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg/399px-Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg",
  },
  {
    artistName: "Post Malone",
    nationality: "U.S.",
    totalTracks: "98",
    streams: "30,258,079,120",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Post_Malone_at_the_2019_American_Music_Awards.png/322px-Post_Malone_at_the_2019_American_Music_Awards.png",
  },
  {
    artistName: "BTS",
    nationality: "South Korea",
    totalTracks: "263",
    streams: "29,207,158,405",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAzMDQ3NDk0N15BMl5BanBnXkFtZTgwMjM3MTkzMjI@._V1_UY1200_CR480,0,630,1200_AL_.jpg",
  },
];
const bodyEl = document.querySelector("body");
const createCard = (imgUrl, artistName, nationality, totalTracks, streams) => {
  const cardEl = document.querySelector(".card");

  const card = document.createElement("div");
  card.className = "card_content";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  card.appendChild(imgEl);

  const nameEl = document.createElement("h2");
  nameEl.textContent = artistName;
  card.appendChild(nameEl);

  // -----------------------------------------------
  const cardText = document.createElement("div");
  cardText.className = "card_text";

  const nationEl = document.createElement("h6");
  nationEl.textContent = "Born: " + nationality;
  cardText.appendChild(nationEl);

  const tracksEl = document.createElement("h6");
  tracksEl.textContent = "Songs: " + totalTracks;
  cardText.appendChild(tracksEl);

  const streamsEl = document.createElement("h6");
  streamsEl.textContent = "Streams: " + streams;
  cardText.appendChild(streamsEl);
  //-------------------------------------------------

  cardEl.append(card, cardText);
  bodyEl.append(cardEl);
};
const mostStreamedArtistsEl = document.querySelector(".most-streamed-artists");
//const mostStreamedAlbumsEl = document.querySelector(".most-streamed-albums");

const headerMostStreamedArtists = document.createElement("h1");
//const headerMostStreamedAlbums = document.createElement("h1");

headerMostStreamedArtists.textContent = "Most Streamed Artists";
//headerMostStreamedAlbums.textContent = "Most Streamed Albums";

mostStreamedArtistsEl.appendChild(headerMostStreamedArtists);
//mostStreamedAlbumsEl.appendChild(headerMostStreamedAlbums);

artists.map((artist) => {
  createCard(
    artist.imgUrl,
    artist.artistName,
    artist.nationality,
    artist.totalTracks,
    artist.streams
  );
});
