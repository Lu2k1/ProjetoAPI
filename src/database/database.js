const sqlite3 = require('sqlite3').verbose();
const path = require('path');

/* 
Este arquivo configura a conexão com o banco de dados SQLite. 
Ele cria duas tabelas: uma para usuários e outra para tarefas. 
A tabela de usuários armazena o nome de usuário e a senha, 
enquanto a tabela de tarefas armazena o título da tarefa, 
se está concluída ou não, e uma referência ao usuário que criou a tarefa.
*/

const db = new sqlite3.Database(path.resolve(__dirname, 'database.db'), (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Conectado ao banco de dados SQLite.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT NOT NULL
    )`);

  db.run(`CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed BOOLEAN NOT NULL DEFAULT 0,
        userId INTEGER,
        FOREIGN KEY (userId) REFERENCES users(id)
    )`);
});

module.exports = db;