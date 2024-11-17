const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Importar rotas
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Configurar rotas
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Carregar Swagger
let swaggerDocument;
try {
  const swaggerPath = path.join(__dirname, 'docs', 'swagger.yaml');
  console.log(`Carregando Swagger do caminho: ${swaggerPath}`);
  swaggerDocument = yaml.load(fs.readFileSync(swaggerPath, 'utf8'));
  console.log("Swagger carregado com sucesso.");
} catch (e) {
  console.error("Erro ao carregar o arquivo swagger.yaml:", e.message);
  process.exit(1);
}

// Configurar Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Inicializar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
