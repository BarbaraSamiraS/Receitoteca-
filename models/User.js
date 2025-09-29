import Sequelize from 'sequelize';
import db from './db.js';

const User = db.define("users", {
  idUser: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    unique: true
  },
  senha: {
    type: Sequelize.STRING(255),
    allowNull: false
  }
});

User.sync();
// User.sync({ alter: true});

export default User;