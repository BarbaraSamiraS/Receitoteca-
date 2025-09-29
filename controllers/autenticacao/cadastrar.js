import path from "path";
import User from '../../models/User.js';

export function cadastro(app, __dirname) {
    app.get("/cadastro", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
    });

    app.post("/cadastrar", async (req, res) => {

        try {
            const user = await User.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
            });
            res.redirect('/perfil?sucesso=1');

        } catch (err) {
            console.error(err);
            res.status(400).send("Erro ao cadastrar Usuário.");
        }

    });
}