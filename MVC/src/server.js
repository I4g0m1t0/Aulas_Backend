const express = require('express');
const AlunoController = require('./controllers/alunoController');

const app = express();
app.use(express.json());

const alunoController = new AlunoController();  // Instancia o controller

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rota para obter todos os alunos - alterei para '/alunos'
app.get('/alunos', (req, res) => alunoController.getAll(req, res));

// Rota para criar um novo aluno
app.post('/aluno', (req, res) => alunoController.create(req, res));

// Rota para atualizar um aluno
app.put('/aluno/:id', (req, res) => alunoController.update(req, res));

// Rota para excluir um aluno
app.delete('/aluno/:id', (req, res) => alunoController.delete(req, res));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
