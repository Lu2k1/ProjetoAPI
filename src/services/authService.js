const db = require('../database/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/*
  Este arquivo contém a classe AuthService que gerencia a autenticação de usuários.
  Ele possui métodos para registrar novos usuários e fazer login, 
  utilizando bcrypt para criptografar senhas e jsonwebtoken para gerar tokens de autenticação.
*/

class AuthService {
  async registerUser(username, password) {
    return new Promise((resolve, reject) => {
      const hashedPassword = bcrypt.hashSync(password, 8);
      db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hashedPassword], function (err) {
        if (err) return reject("Erro ao registrar o usuário.");
        resolve({ id: this.lastID, username });
      });
    });
  }

  async loginUser(username, password) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, user) => {
        if (err || !user) return reject("Usuário não encontrado.");

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return reject("Senha inválida.");

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
        resolve({ auth: true, token });
      });
    });
  }
}

module.exports = new AuthService();