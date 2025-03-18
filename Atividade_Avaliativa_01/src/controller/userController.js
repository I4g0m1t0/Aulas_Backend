const { error } = require('console');
const User = require('../models/user.js');

class UserController {
    constructor() {
        this.usuarios = [
            new User(1, 'Teste', 'Teste@gmail.com', 123),
            new User(2, 'Teste2', 'Teste2@gmail.com', 123)
        ];
        this.nextId = 3;
    }

    findById(id) {
        const usuario = this.usuarios.find(usuario => usuario.id === id);

        if(!usuario) {
            throw new Error("Usuário não existe");
        }
        return usuario;
    }

    getAll(req, res) {
        return res.status(200).json(this.usuarios);
    }

    create(req, res) {
        const { nome, email, senha} = req.body;
        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Por favor, preencha todos os campos!' });
        }

        const usuario = new User(this.nextId++, nome, email, senha);
        this.usuarios.push(usuario);
        res.status(201).json(usuario.getInfo());
    }

    update(req, res) {
        const { nome } = req.body;
        const usuario = this.usuarios.find(a => a.id === parseInt(req.params.id));
        if (!usuario) return res.status(404).json({ error: 'Usuário não encontrado!' });

        usuario.update(nome);
        res.status(201).json(usuario.getInfo());
    }

    delete(req, res) {
        const index = this.usuarios.findIndex(a => a.id === parseInt(req.params.id));
        if (index < 0) return res.status(404).json({ error: 'Usuário não encontrado!'});
        this.usuarios.splice(index, 1);
        res.status(204).send();
    }
}

module.exports = UserController;