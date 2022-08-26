const express = require("express");
const path = require("path");
const db = require("./database");
const routes = require('./routes')

const app = express();

db.connect();




//definindo template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//definindo os arquivos public
app.use(express.static(path.join(__dirname, "public")));

//habilita server receber dados via post
app.use(express.urlencoded({ extended: true }));

//definindo as rotas
app.use('/', routes);

//404 error (not found)
app.use((req, res) => {
  //middleware
  res.send("Pagina nao encontrada");
});

//executando o servidor para
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server is listening on ${port}`));
