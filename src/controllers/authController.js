const AuthService = require('../services/authService');

/* 
  AuthController é responsável por gerenciar as operações de autenticação,
  como registrar novos usuários e fazer login. Ele se comunica com o 
  AuthService para realizar as ações necessárias e retorna as respostas 
  apropriadas ao cliente.
*/

class AuthController {
  async register(req, res) {
    const { username, password } = req.body;
    try {
      const user = await AuthService.registerUser(username, password);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    try {
      const response = await AuthService.loginUser(username, password);
      res.status(200).json(response);
    } catch (error) {
      res.status(401).json({ message: error });
    }
  }
}

module.exports = new AuthController();