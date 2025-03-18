const Aluno = require('../models/alunos');

class AlunoController {
    constructor() {
        this.alunos = [
            new Aluno(1, 'João', 20),
            new Aluno(2, 'Maria', 22)
        ];
        this.nextId = 3;
    }

    getAll(req, res) {
        return res.status(200).json(this.alunos);  // Retorna todos os alunos em formato JSON
    }

    create(req, res) {
        const { nome, idade } = req.body;
        if (!nome || !idade) {
            return res.status(400).json({ error: 'Nome e idade são obrigatórios' });
        }

        const aluno = new Aluno(this.nextId++, nome, idade);
        this.alunos.push(aluno);
        res.status(201).json(aluno.getInfo());
    }

    update(req, res) {
        const { nome, idade } = req.body;
        const aluno = this.alunos.find(a => a.id === parseInt(req.params.id));
        if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });

        aluno.update(nome, idade);  // Chamando o método update de Aluno
        res.status(200).json(aluno.getInfo());
    }

    delete(req, res) {
        const index = this.alunos.findIndex(a => a.id === parseInt(req.params.id));
        if (index < 0) return res.status(404).json({ error: 'Aluno não encontrado' });
        this.alunos.splice(index, 1);
        res.status(204).send();
    }
}

module.exports = AlunoController;