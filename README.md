# API de Tarefas

## Sumário
- [Introdução](#introdução)
- [Objetivo do Projeto](#objetivo-do-projeto)
- [Tecnologias e Bibliotecas Utilizadas](#tecnologias-e-bibliotecas-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Instruções para Configurar e Executar o Projeto](#instruções-para-configurar-e-executar-o-projeto)

## Introdução
Este projeto é uma API RESTful para gerenciamento de tarefas, desenvolvida com Node.js e Express. A API permite que os usuários realizem operações de autenticação, como registro e login, além de gerenciar suas tarefas com funcionalidades de criação, leitura, atualização e exclusão (CRUD).

## Objetivo do Projeto
O objetivo deste projeto é fornecer uma solução simples e eficaz para gerenciamento de tarefas, permitindo que os usuários mantenham suas listas de tarefas organizadas e acessíveis através de uma interface de API.

## Tecnologias e Bibliotecas Utilizadas
- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express**: Framework para construir aplicações web em Node.js.
- **SQLite**: Banco de dados leve utilizado para armazenar dados.
- **JWT (JSON Web Tokens)**: Para autenticação segura.
- **bcryptjs**: Para hash de senhas.
- **dotenv**: Para carregar variáveis de ambiente a partir do arquivo `.env`.
- **CORS**: Para permitir requisições entre diferentes origens.
- **Swagger**: Para documentação da API.
        
<h3>Instruções para Configurar e Executar o Projeto</h3>

  <h3>Clone o repositório:</h3>
  <pre><code>
git clone https://github.com/Henrique-Moreno/atividade-api-js.git
    </code></pre>

  <h3>Renomeie o arquivo <code>.env.example</code> para <code>.env</code>:</h3>
    <pre><code>
mv .env.example .env
    </code></pre>

  <h3>Instale as dependências:</h3>
    <pre><code>
npm install
    </code></pre>

  <h3>Execute o projeto:</h3>
    <pre><code>
npm run dev
    </code></pre>

  <h2>Acesse a documentação da API:</h2>
    <p>Abra seu navegador e vá até <a href="http://localhost:3001/api-docs/">http://localhost:3001/api-docs/</a> para visualizar a documentação gerada pelo Swagger.</p>

  <h3>Versão do Node.js:</h3>
    <p>Este projeto foi desenvolvido utilizando a versão <strong>v22.11.0</strong> do Node.js.</p>

 <h1>Estrutura de Pastas</h1>
    <pre>
        <code>
    /src
    │
    ├── /controllers      # Controladores que gerenciam a lógica das rotas.
    │   ├── authController.js
    │   └── taskController.js
    │
    ├── /services         # Serviços que contêm a lógica de negócios da aplicação.
    │   ├── authService.js
    │   └── taskService.js
    │
    ├── /docs             # Documentação da API em formato Swagger.
    │   └── swagger.yaml
    │
    ├── /middlewares      # Middlewares para autenticação e outras funcionalidades.
    │   └── verifyToken.js
    │
    ├── /routes           # Definição das rotas da API.
    │   ├── authRoutes.js
    │   └── taskRoutes.js
    │
    ├── /database         # Configuração do banco de dados SQLite.
    │   └── database.js
    │
    server.js             # Arquivo principal que inicia a aplicação.

Dockerfile            # Arquivo para construir a imagem Docker da aplicação.
.env                  # Exemplo do arquivo .env com variáveis de ambiente.
        </code>
    </pre>
