const TaskService = require('../services/taskService');

/* 
  TaskController é responsável por gerenciar as operações relacionadas 
  às tarefas, como criar, obter, atualizar e deletar tarefas. Ele se 
  comunica com o TaskService para realizar as ações necessárias e 
  retorna as respostas apropriadas ao cliente.
*/

class TaskController {
  async createTask(req, res) {
    const { title } = req.body;
    const userId = req.userId; // Obtido do middleware de verificação do token

    try {
      const task = await TaskService.createTask(title, userId);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async getTasks(req, res) {
    const userId = req.userId;

    try {
      const tasks = await TaskService.getTasksByUserId(userId);
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  async updateTask(req, res) {
    const { id } = req.params;
    const { title, completed } = req.body;

    try {
      const message = await TaskService.updateTask(id, title, completed);
      res.status(200).json({ message });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }

  async deleteTask(req, res) {
    const { id } = req.params;

    try {
      const message = await TaskService.deleteTask(id);
      res.status(200).json({ message });
    } catch (error) {
      res.status(404).json({ message: error });
    }
  }
}

module.exports = new TaskController();