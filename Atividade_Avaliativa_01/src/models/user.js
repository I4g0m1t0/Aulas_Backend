class User {
    id;
    nome;
    email;
    senha;

    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    getInfo() {
        return {
            id: this.id,
            nome: this.nome,
            email: this.email
        };
    }

    update(nome) {
        if (nome) this.nome = nome;
    }
}

module.exports = User;