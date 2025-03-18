const Task = require("../models/task");
const ProjectController = require("./projectController");
const UserController = require("./userController");

class TaskController {
    constructor() {
        const proj1 = (new ProjectController()).findById(1)
        const usu1 = (new UserController()).findById(1)
        this.tarefas = [
            new Task (1, 'task teste', 'nsei', proj1, usu1),
            new Task (2, 'task teste', 'nsei', proj1, usu1),
        ];
        this.nextId = 3;
    }

    getAll(req, res) {
        return res.status(200).json(this.tarefas);
    }

    create(req, res) {
        const { titulo, status} = req.body;
        if (!titulo || !status) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos!' });
        }

        const tarefa = new Task(this.nextId++, titulo, status);
        this.tarefas.push(tarefa);
        res.status(201).json(tarefa.getInfo());
    }

    update(req, res) {
        const { titulo, status } = req.body;
        const tarefa = this.tarefas.find(a => a.id === parseInt(req.params.id));
        if (!tarefa) return res.status(404).json({ error: 'Tarefa não encontrada!' });

        tarefa.update(titulo, status);
        res.status(201).json(tarefa.getInfo());
    }

    delete(req, res) {
        const index = this.tarefas.findIndex(a => a.id === parseInt(req.params.id));
        if (index < 0) return res.status(404).json({ error: 'Tarefa não encontrada!'});
        this.tarefas.splice(index, 1);
        res.status(204).send();
    }
}

module.exports = TaskController;