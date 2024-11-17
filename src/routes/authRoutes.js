/* 
Este arquivo define as rotas para autenticação na API.
Ele permite que os usuários se registrem e façam login.
As rotas são:
- POST /register: para registrar um novo usuário.
- POST /login: para fazer login de um usuário existente.
*/

const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController');

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;