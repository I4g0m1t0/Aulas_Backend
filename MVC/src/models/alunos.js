class Aluno {
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
    }

    // Método para atualizar nome e idade do aluno
    update(nome, idade) {
        if (nome) this.nome = nome;
        if (idade) this.idade = idade;
    }

    // Método para retornar informações do aluno
    getInfo() {
        return {
            id: this.id,
            nome: this.nome,
            idade: this.idade
        };
    }
}

module.exports = Aluno;
