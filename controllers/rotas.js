import defineAutenticacao from "./autenticacao/autenticacaoController.js";

export default function defineRoutes(app, __dirname) {
  defineAutenticacao(app, __dirname);
}