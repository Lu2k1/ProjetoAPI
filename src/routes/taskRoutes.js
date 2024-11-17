/* 
Este arquivo define as rotas para gerenciar tarefas na API.
Ele permite que os usuários criem, leiam, atualizem e excluam tarefas.
As rotas são:
- POST /: para criar uma nova tarefa (requere autenticação).
- GET /: para obter todas as tarefas do usuário autenticado.
- PUT /:id: para atualizar uma tarefa existente (requere autenticação).
- DELETE /:id: para excluir uma tarefa existente (requere autenticação).
*/


const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/taskController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, TaskController.createTask);
router.get('/', verifyToken, TaskController.getTasks);
router.put('/:id', verifyToken, TaskController.updateTask);
router.delete('/:id', verifyToken, TaskController.deleteTask);

module.exports = router;