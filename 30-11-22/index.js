const express = require("express");
const fs = require("fs");

// istanza express
const app = express();

// apertura cartella public
app.use(express.static("public"));

// urlencoded per leggere i parametri post
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server Online on port:3000");
});

// DISPLAY IN HTML
app.get("/home", function (req, res) {
  res.sendFile("index.html", { root: __dirname + "/src" });
});

// ATTORI
app.get("/attori", function (req, res) {
  // -------------lettura dati---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------

  // -------- filtro i campi ---------------------
  const arr_attori = attori.map((att) => {
    // const {id, nome, cognome} = att
    const id = att.id;
    const nome = att.nome;
    const cognome = att.cognome;
    const birthday = att.data_nascita;

    return { id, nome, cognome, birthday };
  });

  //console.log(attori);
  res.json(arr_attori);
});

app.get("/attore", function (req, res) {
  // -------------lettura parametro ---------------------
  const id_attore = parseInt(req.query.id);
  if (isNaN(id_attore)) {
    res.status(400).send("Parametro mancante!");
  }

  // -------------lettura dati da file ---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------

  // ------------- filtro i dati -----------------------------
  const attr = attori.find((attore) => {
    return attore.id == id_attore;
  });

  if (typeof attr === "undefined") {
    //console.log("Attore undefined ");
    res.status(400).send("Attore non trovato!");
  } else {
    res.json(attr);
  }
});

// POST
app.post("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };

  // -------------lettura dati da file ---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------
  const index = Number(nuovo_attore.id) - 1;
  console.log("Nuovo indice: " + index);
  attori[index] = nuovo_attore;
  console.log(attori);
  fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
  res.status(200).send(attori);
});

// PUT
app.put("/attore", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_attore = {
    id: req.body.id == undefined ? "" : parseInt(req.body.id),
    nome: req.body.nome,
    cognome: req.body.cognome,
    data_nascita:
      req.body.data_nascita == undefined ? "" : req.body.data_nascita,
    riconoscimenti:
      req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
    inizio_attivita:
      req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
    fine_attivita:
      req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
    in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
  };
  // -------------lettura dati da file ---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------

  // trovare e cancellare l'elemento
  const index = attori.findIndex((attore) => {
    return attore.id === nuovo_attore.id;
  });

  if (index > 0) {
    attori.splice(index, 1, nuovo_attore);

    //attori[index] = nuovo_attore;

    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).send("Attore aggiornato");
  } else {
    res.status(200).send("Attore non trovato");
  }
});

// DELETE
app.delete("/attore", function (req, res) {
  // ricevo l'id
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  // -------------lettura dati da file ---------------------
  const attori_text = fs.readFileSync("./src/attori.json", "utf8");
  const attori = JSON.parse(attori_text);
  // ---------------------------------------------

  // verifico che l'elemento esista
  const attr = attori.filter((attore) => {
    return attore.id == id_da_cancellare;
  });

  // se l'elemento esiste lo cancello
  if (attr.length > 0) {
    const array_deleted = attori.filter((attore) => {
      return attore.id != id_da_cancellare;
    });
    fs.writeFileSync("./src/attori.json", JSON.stringify(array_deleted));
    res.status(200).send(array_deleted);
  } else {
    res.status(200).send(array_deleted);
  }
});

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
