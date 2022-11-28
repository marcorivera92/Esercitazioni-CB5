const express = require("express");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const port = 3000;
const calc_module = require("./src/calc_module");

app.use(express.static("public"));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log(`Server Online on port ${port}!`));

app.get("/home", function (req, res) {
  res.sendFile("calcolatrice.html", { root: __dirname + "/src" });
});

app.get("/calcolatrice", function (req, res) {
  console.log(req.query);
  let par1 = req.query.param1; //operando 1
  let par2 = req.query.param2; // operando 2
  let par3 = req.query.param3; // variabile dell'operazione
  let result;
  switch (par3) {
    case "somma":
      result = calc_module.somma(par1, par2);
      res.status(200).send(result + "");
      break;
    case "sottrazione":
      result = calc_module.sottrazione(par1, par2);
      res.status(200).send(result + "");
      break;
    case "moltiplicazione":
      result = calc_module.moltiplicazione(par1, par2);
      res.status(200).send(result + "");
      break;
    case "divisione":
      result = calc_module.divisione(par1, par2);
      res.status(200).send(result + "");
      break;
    case "modulo":
      result = calc_module.modulo(par1, par2);
      res.status(200).send(result + "");
      break;
    default:
      console.log("error");
  }
});
