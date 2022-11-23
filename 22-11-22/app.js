"use strict";

let mia_calc = require("./calc_module.js");

const http = require("http");
const url = require("url");

const pagina_home = "Benvenuto nella mia home";
const pagina_somma =
  "L'html della vostra pagina che fa la somma come definito nell'esercizio";
const server = http.createServer((req, res) => {
  const my_url = url.parse(req.url, true).pathname;
  const params = url.parse(req.url, true).query;

  switch (my_url) {
    case "/home":
      res.write(pagina_home);
      break;

    case "/calcolatrice":
      res.write("Benvenuto nella pagina della mia calcolatrice");

    case "/pagina_somma":
      res.write(pagina_somma);
      break;

    case "/sum":
      const primo_addendo = params.add_1;
      const secondo_addendo = params.add_2;

      res.write(" Il primo parametro è " + primo_addendo);
      res.write(" Il secondo è " + secondo_addendo);
      const result = mia_calc.sum(primo_addendo, secondo_addendo);
      res.write(" Il risultato è " + result);
      break;

    case "/subtract":
      const sub1 = params.sub_1;
      const sub2 = params.sub_2;

      res.write(" Il primo parametro è " + sub1);
      res.write(" Il secondo è " + sub2);
      const subtract = mia_calc.subtract(sub1, sub2);
      res.write(" Il risultato è " + subtract);

      break;

    case "/multiply":
      const mult1 = params.mult_1;
      const mult2 = params.mult_2;

      res.write(" Il primo parametro è " + mult1);
      res.write(" Il secondo è " + mult2);
      const multiply = mia_calc.multiply(mult1, mult2);
      res.write(" Il risultato è " + multiply);

      break;

    case "/divide":
      const div1 = params.div_1;
      const div2 = params.div_2;

      res.write(" Il primo parametro è " + div1);
      res.write(" Il secondo è " + div2);
      const divide = mia_calc.divide(div1, div2);
      res.write(" Il risultato è " + divide);

      break;

    default:
      res.write(
        my_url +
          "<h1>ERRORE</h1><p>La pagina non esiste torna alla <a href='/home'>home</a></p>"
      );
  }
  res.end();
});
server.listen(3000);
console.log("Salve mondo");
