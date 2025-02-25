var pessoa = {
    nome: 'Joao',
    idade: 20,
    cpf: '123.456.789-10',
    ola: function() {
        console.log("Olá, meu nome é " + this.nome);
    }
}

pessoa.ola();

// Factory Functions
function Carro(modelo, cor, dono) {
    this.modelo = modelo;
    this.cor = cor;
    this.dono = dono;
    this.ligar = function(){
        console.log("O carro " + this.modelo + " está ligado.");
    }
}
var carro = new Carro('Fusca', 'Azul', 'João');
carro.ligar();

// Prototype Objects
function animal(especie, nome) {
    this.especie = especie;
    this.nome = nome;
}
animal.prototype.emitirSom = function() {
    console.log(this.nome + " está emitindo som");
}
var cachorro = new animal('Cachorro', 'Rex');
var gato = new animal('Gato', 'Mingau');

cachorro.emitirSom();
gato.emitirSom();

// Object.create
var carro = Object.create(Carro);
carro2.modelo = 'Fiat';
carro2.cor = 'Vermelho';
carro2.dono = 'Maria';

carro2.ligar();