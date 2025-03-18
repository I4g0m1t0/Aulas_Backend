const Project = require("./project");
const User = require("./user");

class Task {
    id;
    titulo;
    status;
    projeto;
    usuario;

    constructor(id, titulo, status, projeto, usuario) {
        if(!(projeto instanceof Project)) {
            throw new Error("O projeto deve ser uma instância da classe Projeto");
        }

        if(!(usuario instanceof User)) {
            throw new Error("O usuário deve ser uma instância da classe Usuário");
        }
        
        this.id = id;
        this.titulo = titulo;
        this.status = status;
        this.projeto = projeto;
        this.usuario = usuario;
    }

    getInfo() {
        return {
            id: this.id,
            titulo: this.titulo,
            status: this.status,
            projeto: this.projeto.nome,
            usuario: this.usuario.nome
        };
    }

    update(titulo, status) {
        if (titulo) this.titulo = titulo;
        if (status) this.status = status;
    }
}

module.exports = Task;