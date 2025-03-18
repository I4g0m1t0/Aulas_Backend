const express = require('express')
const { json } = require('express')

// Criar classe Aluno
class Aluno {
    constructor(id, nome, idade) {
        this.id = id
        this.nome = nome
        this.idade = idade
    }
}

const alunos = [
    new Aluno(1, 'João', 20),
    new Aluno(2, 'Maria', 22)
]

const app = express()
app.use(json())

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/alunos', (req, res) => {
    res.status(200).json(alunos);
})

app.post('/alunos', (req, res) => {
    const { nome, idade } = req.body
    const aluno = new Aluno(nome, idade)
    alunos.push(aluno)
    res.status(201).json(aluno)
})

app.put('/alunos/:id', (req, res) => {
    const { id } = req.params
    const { nome, idade } = req.body
    const aluno = alunos.find(aluno => aluno.id === parseInt(id))

    if (!aluno) {
        return res.status(404).json({ error: 'Aluno não encontrado' })
    }

    aluno.nome = nome
    aluno.idade = idade
    res.status(200).json(aluno)
})

app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params
    const index = alunos.findIndex(aluno => aluno.id === parseInt(id))

    if (index < 0) {
        return res.status(404).json({ error: 'Aluno não encontrado' })
    }
    
    alunos.splice(index, 1)
    res.status(204).send()
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})