const express = require('express');
const routes = require('./routes');

const app = express();

// req.query = para filtrar
// req.params = para editar ou deletar
// req.body = acessar corpo da requisição(criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);
