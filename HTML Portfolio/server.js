const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // serve arquivos estáticos (HTML, CSS, etc.)

// Rota para listar projetos
app.get('/api/projects', (req, res) => {
const data = fs.readFileSync('projects.json', 'utf8');
res.json(JSON.parse(data));
});

// Rota para adicionar projeto (POST simples – para portfólio)
app.post('/api/projects', (req, res) => {
const newProject = req.body;
const projects = JSON.parse(fs.readFileSync('projects.json', 'utf8'));
projects.push(newProject);
fs.writeFileSync('projects.json', JSON.stringify(projects, null, 2));
res.json({ message: 'Projeto adicionado!' });
});

app.listen(port, () => {
console.log(`Servidor rodando em http://localhost:${port}`);
});