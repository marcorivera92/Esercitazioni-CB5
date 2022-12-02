const express = require("express");
const fs = require("fs");

// istanza express
const app = express();

// apertura cartella public
app.use(express.static("public"));

// urlencoded per leggere i parametri post
app.use(express.urlencoded({ extended: false }));

// MIDDLEWARE TEST - associato sotto alla GET attore
const middlewareProva = (req, res, next) => {
  console.log("Richiesta ricevuta.");
  next();
};

/* app.use("/attore", middlewareProva);

const auth = (req, res, next) => {
  if (req.body.token == undefined || req.body.token.length == 0) {
    res.status(403).send("Utente non autorizzato");
  }
  const token = req.body.token;
  if (token != "qwerty") {
    res.status(403).send("Utente non autorizzato");
  }

  next();
};
 */

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

app.get("/attore", middlewareProva, function (req, res) {
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

  // trova il primo id
  const arr_map = attori.map((attore) => attore.id);
  const id_max = Math.max(...arr_map);
  nuovo_attore.id = id_max + 1;
  const index = attori.length;

  attori[index] = nuovo_attore;

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

/* ---------- REGISTI ---------- */

// REGISTI
app.get("/registi", function (req, res) {
  // -------------lettura dati---------------------
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // -------- filtro i campi ---------------------
  const arr_registi = registi.map((reg) => {
    // const {id, nome, cognome} = att
    const id = reg.id;
    const nome = reg.nome;
    const cognome = reg.cognome;
    const birthday = reg.data_nascita;

    return { id, nome, cognome, birthday };
  });

  //console.log(attori);
  res.json(arr_registi);
});

app.get("/regista", function (req, res) {
  // -------------lettura parametro ---------------------
  const id_regista = parseInt(req.query.id);
  if (isNaN(id_regista)) {
    res.status(400).send("Parametro mancante!");
  }

  // -------------lettura dati da file ---------------------
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // ------------- filtro i dati -----------------------------
  const regis = registi.find((regista) => {
    return regista.id == id_regista;
  });

  if (typeof regis === "undefined") {
    //console.log("Attore undefined ");
    res.status(400).send("Regista non trovato!");
  } else {
    res.json(regis);
  }
});

// POST
app.post("/regista", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_regista = {
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
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // trova il primo id
  const arr_map = registi.map((regista) => regista.id);
  const id_max = Math.max(...arr_map);
  nuovo_regista.id = id_max + 1;
  const index = registi.length;

  registi[index] = nuovo_regista;

  fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
  res.status(200).send(registi);
});

// PUT
app.put("/regista", function (req, res) {
  if (req.body.nome == undefined) {
    res.status(400).send("Parametro nome mancante!");
  }

  if (req.body.cognome == undefined) {
    res.status(400).send("Parametro cognome mancante!");
  }

  const nuovo_regista = {
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
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // trovare e cancellare l'elemento
  const index = registi.findIndex((regista) => {
    return regista.id === nuovo_regista.id;
  });

  if (index > 0) {
    registi.splice(index, 1, nuovo_regista);

    fs.writeFileSync("./src/registi.json", JSON.stringify(registi));
    res.status(200).send("Regista aggiornato");
  } else {
    res.status(200).send("Regista non trovato");
  }
});

// DELETE
app.delete("/regista", function (req, res) {
  // ricevo l'id
  if (req.body.id === undefined) {
    res.status(400).send("Parametro id mancante!");
  }
  if (isNaN(parseInt(req.body.id))) {
    res.status(400).send("Parametro non numerico!");
  }

  const id_da_cancellare = req.body.id;

  // -------------lettura dati da file ---------------------
  const registi_text = fs.readFileSync("./src/registi.json", "utf8");
  const registi = JSON.parse(registi_text);
  // ---------------------------------------------

  // verifico che l'elemento esista
  const regis = attori.filter((regista) => {
    return regista.id == id_da_cancellare;
  });

  // se l'elemento esiste lo cancello
  if (regis.length > 0) {
    const array_deleted = registi.filter((regista) => {
      return regista.id != id_da_cancellare;
    });
    fs.writeFileSync("./src/registi.json", JSON.stringify(array_deleted));
    res.status(200).send(array_deleted);
  } else {
    res.status(200).send(array_deleted);
  }
});
