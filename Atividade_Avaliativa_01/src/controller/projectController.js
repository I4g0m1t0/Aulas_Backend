const Project = require('../models/project.js');

class ProjectController {
    constructor() {
        this.projetos = [
            new Project (1, 'Projeto teste', 'Sem descrição'),
            new Project (2, 'Projeto teste 02', 'Sem descrição')
        ];
        this.nextId = 3;
    }

    findById(id) {
        const projeto = this.projetos.find(projeto => projeto.id === id)

        if (!projeto)
                throw new Error("Projeto não existe")

        return projeto
    }

    getAll(req, res) {
        return res.status(200).json(this.projetos);
    }

    create(req, res) {
        const { nome, descricao} = req.body;
        if (!nome || !descricao) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos!' });
        }

        const projeto = new Project(this.nextId++, nome, descricao);
        this.usuarios.push(projeto);
        res.status(201).json(projeto.getInfo());
    }

    update(req, res) {
        const { nome, descricao } = req.body;
        const projeto = this.projetos.find(a => a.id === parseInt(req.params.id));
        if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado!' });

        projeto.update(nome, descricao);
        res.status(201).json(projeto.getInfo());
    }

    delete(req, res) {
        const index = this.projetos.findIndex(a => a.id === parseInt(req.params.id));
        if (index < 0) return res.status(404).json({ error: 'Projeto não encontrado!'});
        this.projetos.splice(index, 1);
        res.status(204).send();
    }
}

module.exports = ProjectController;