import { createServer } from "node:http";
import fs from "node:fs";
import { URL } from "node:url";
import { upperCase } from "upper-case";

import { sumar, restar, multiplicar, dividir } from "./modules/calculo.js";
import { mostrarHora, mostrarFecha } from "./modules/tiempo.js";

const server = createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");

  let contenido = "";

  switch (url.pathname) {

    case "/":
      console.log("Entró a Inicio");

      contenido = `
        <h1>${upperCase("inicio")}</h1>
        <p>Bienvenido al sitio</p>
      `;
      break;

    case "/suma":
      const suma = sumar(2, 3);

      console.log("Suma 2 + 3 =", suma);

      contenido = `
        <h1>Suma</h1>
        <p>2 + 3 = ${suma}</p>
      `;
      break;

    case "/resta":
      const resta = restar(5, 2);

      console.log("Resta 5 - 2 =", resta);

      contenido = `
        <h1>Resta</h1>
        <p>5 - 2 = ${resta}</p>
      `;
      break;

    case "/multiplicacion":
      const mult = multiplicar(4, 3);

      console.log("Multiplicación 4 * 3 =", mult);

      contenido = `
        <h1>Multiplicación</h1>
        <p>4 × 3 = ${mult}</p>
      `;
      break;

    case "/division":
      const div = dividir(10, 2);

      console.log("División 10 / 2 =", div);

      contenido = `
        <h1>División</h1>
        <p>10 / 2 = ${div}</p>
      `;
      break;

    case "/tiempo":
      const hora = mostrarHora();
      const fecha = mostrarFecha();

      console.log("Hora actual:", hora);   
      console.log("Fecha actual:", fecha); 

      contenido = `
        <h1>Tiempo</h1>
        <p>Hora actual: ${hora}</p>
        <p>Fecha actual: ${fecha}</p>
      `;
      break;

      case "/favicon.ico":
  res.writeHead(204);
  res.end();
  return;

    default:
      console.log("Ruta no encontrada:", url.pathname);

      contenido = `
        <h1>404</h1>
        <p>Página no encontrada</p>
      `;
  }

  fs.readFile("./pages/index.html", "utf8", (err, data) => {
    if (err) {
      res.end("Error");
      return;
    }

    const pagina = data.replace("{{CONTENIDO}}", contenido);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(pagina);
  });

});

server.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});

console.log("Suma 2 + 3 =", sumar(2, 3));
console.log("Resta 5 - 2 =", restar(5, 2));
console.log("Multiplicación 4 * 3 =", multiplicar(4, 3));
console.log("División 10 / 2 =", dividir(10, 2));

console.log("Hora actual:", mostrarHora());
console.log("Fecha actual:", mostrarFecha());