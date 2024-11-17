const db = require('../database/database');

/*
  Este arquivo contém a classe TaskService que gerencia as tarefas dos usuários.
  Ele possui métodos para criar novas tarefas, obter tarefas de um usuário específico,
  atualizar tarefas existentes e deletar tarefas.
*/

class TaskService {
  async createTask(title, userId) {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO tasks (title, userId) VALUES (?, ?)`, [title, userId], function (err) {
        if (err) return reject("Erro ao criar a tarefa.");
        resolve({ id: this.lastID, title });
      });
    });
  }

  async getTasksByUserId(userId) {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM tasks WHERE userId = ?`, [userId], (err, tasks) => {
        if (err) return reject("Erro ao obter tarefas.");
        resolve(tasks);
      });
    });
  }

  async updateTask(id, title, completed) {
    return new Promise((resolve, reject) => {
      db.run(`UPDATE tasks SET title = ?, completed = ? WHERE id = ?`, [title, completed ? 1 : 0, id], function (err) {
        if (err || this.changes === 0) return reject("Tarefa não encontrada.");
        resolve("Tarefa atualizada com sucesso.");
      });
    });
  }

  async deleteTask(id) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM tasks WHERE id = ?`, [id], function (err) {
        if (err || this.changes === 0) return reject("Tarefa não encontrada.");
        resolve("Tarefa deletada com sucesso.");
      });
    });
  }
}

module.exports = new TaskService();