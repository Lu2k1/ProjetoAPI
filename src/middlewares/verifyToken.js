const jwt = require('jsonwebtoken');

/* 
Este arquivo contém um middleware que verifica se o token JWT 
fornecido pelo usuário é válido. Ele extrai o token do cabeçalho da 
requisição, verifica sua validade e, se for válido, salva o ID do 
usuário na requisição para uso posterior. Se o token não for fornecido 
ou for inválido, retorna um erro apropriado.
*/

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(403).send("Token não fornecido.");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).send("Token inválido.");

    req.userId = decoded.id; // Salva o ID do usuário no request para uso posterior.
    next();
  });
};