import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from "url";
import defineRoutes from "./controllers/rotas.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));

import db from './models/db.js';

app.use(session({
    secret: 'chave',
    resave: false,
    saveUninitialized: true
}));



export { app };

defineRoutes(app, __dirname);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});


app.get("/perfil", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "perfil.html"));
});

app.get("/cadastrarReceita", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "cadastrarReceita.html"));
});

app.get("/receita", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "receita.html"));
});


app.get('/session', (req, res) => {
  if (req.session.nome) {
    res.json({ nome: req.session.nome });
  } else {
    res.json({ nome: null });
  }
});


//porta q vai rodar
const port = 3000;

app.listen(port, ()=> [
    console.log(`Servidor rodando em http://localhost:${port}`)
]);