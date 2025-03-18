class Project {
    id;
    nome;
    descricao;

    constructor(id, nome, descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    getInfo() {
        return {
            id: this.id,
            nome: this.nome,
            descricao: this.descricao
        };
    }

    update(nome, descricao) {
        if (nome) this.nome = nome;
        if (descricao) this.descricao = descricao;
    }
}

module.exports = Project;