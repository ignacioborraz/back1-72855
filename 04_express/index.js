import express from "express";

/* server settings */
const server = express();
const port = 8080;
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready);

/* funcionalidades aplicadas al servidor */
server.use(express.urlencoded({ extended: true }));

/* router */
const indexPoint = "/";
const indexCb = (req, res) => res.status(200).send("WELCOME TO COMMERCE");
server.get(indexPoint, indexCb);

const apiPoint = "/api";
const apiCb = (req, res) => res.status(200).send("WELCOME TO MY API");
server.get(apiPoint, apiCb);

server.get("/api/:name/:age", (req, res) => {
  //console.log(req.params);
  const { name, age } = req.params;
  const message = `Hola ${name}! Tienes ${age} años!`;
  return res.status(200).send(message);
});

server.get("/api/welcome", (req, res) => {
  //console.log(req.query);
  const { name, age } = req.query;
  const message = `Hola ${name || "Coder"}! Tienes ${age || 18} años!`;
  return res.status(200).send(message);
});
/* las rutas inexistes SIEMPRE van al final*/
server.get("*", (req, res) => res.status(404).send("NOT FOUND POINT"));
