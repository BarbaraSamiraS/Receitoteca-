import { cadastro } from "./cadastrar.js";
import { login } from "./login.js";

export default function defineAutenticacao(app, __dirname) {
  cadastro(app, __dirname);
  login(app, __dirname);
}