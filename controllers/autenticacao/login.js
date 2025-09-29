import User from '../../models/User.js';

export function login(app, __dirname) {
    app.post("/login", async (req, res) => {
    
      const { email, senha } = req.body;
    try {
        const user = await User.findOne({
          where: {
            email: email,
            senha: senha
          }
        });
    
        if (user) {
          req.session.nome = user.nome;
          req.session.email = user.email;
          res.redirect('/perfil');
        } else {
          res.redirect('/login');
        }
      } catch (err) {
        console.error("Erro na consulta ao banco de dados:", err);
        res.redirect("/login");
      }
    });
    
}