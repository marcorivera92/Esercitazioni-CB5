const artists = [
  {
    artistName: "Drake",
    nationality: "Canada",
    totalTracks: "Songs: 262",
    streams: "Streams: 50,817,785,409",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/220px-Drake_July_2016.jpg",
  },

  {
    artistName: "Bad Bunny",
    nationality: "Puerto Rico",
    totalTracks: "Songs: 163",
    streams: "Streams: 45,937,255,709",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg/220px-Bad_Bunny_2019_by_Glenn_Francis_%28cropped%29.jpg",
  },

  {
    artistName: "Ed Sheeran",
    nationality: "England",
    totalTracks: "Songs: 244",
    streams: "Streams: 38,657,884,240",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/220px-Ed_Sheeran-6886_%28cropped%29.jpg",
  },
  {
    artistName: "The Weeknd",
    nationality: "Canada",
    totalTracks: "Songs: 186",
    streams: "Streams: 35,501,222,262",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Abel_Makkonen_Tesfaye_The_Weeknd.png/319px-Abel_Makkonen_Tesfaye_The_Weeknd.png",
  },
  {
    artistName: "Taylor Swift",
    nationality: "U.S.",
    totalTracks: "Songs: 323",
    streams: "Streams: 33,495,287,052",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png/337px-191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png",
  },
  {
    artistName: "Justin Bieber",
    nationality: "Canada",
    totalTracks: "Songs: 225",
    streams: "Streams: 32,904,774,922",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/336px-Justin_Bieber_in_2015.jpg",
  },
  {
    artistName: "Ariana Grande",
    nationality: "U.S.",
    totalTracks: "Songs: 181",
    streams: "Streams: 32,647,329,982",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ariana_Grande_Grammys_Red_Carpet_2020.png/334px-Ariana_Grande_Grammys_Red_Carpet_2020.png",
  },
  {
    artistName: "Eminem",
    nationality: "U.S.",
    totalTracks: "Songs: 300",
    streams: "Streams: 30,973,887,714",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg/399px-Eminem_-_Concert_for_Valor_in_Washington%2C_D.C._Nov._11%2C_2014_%282%29_%28Cropped%29.jpg",
  },
  {
    artistName: "Post Malone",
    nationality: "U.S.",
    totalTracks: "Songs: 98",
    streams: "Streams: 30,258,079,120",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Post_Malone_at_the_2019_American_Music_Awards.png/322px-Post_Malone_at_the_2019_American_Music_Awards.png",
  },
  {
    artistName: "BTS",
    nationality: "South Korea",
    totalTracks: "Songs: 263",
    streams: "Streams: 29,207,158,405",
    imgUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAzMDQ3NDk0N15BMl5BanBnXkFtZTgwMjM3MTkzMjI@._V1_UY1200_CR480,0,630,1200_AL_.jpg",
  },
];
const createCard = (artistName, imgUrl, nationality, totalTracks, streams) => {
  const cardEl = document.querySelector(".card");

  const card = document.createElement("div");
  card.className = "card_content";

  const nameEl = document.createElement("h2");
  nameEl.textContent = artistName;
  card.appendChild(nameEl);

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", imgUrl);
  card.appendChild(imgEl);
  const descriptionEl = document.createElement("p");
  descriptionEl.textContent = `${nationality} - ${totalTracks} - ${streams}`;
  card.appendChild(descriptionEl);

  cardEl.appendChild(card);
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
    artist.artistName,
    artist.imgUrl,
    artist.nationality,
    artist.totalTracks,
    artist.streams
  );
});
