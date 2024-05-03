// Criação de dois objetos:
const carro1 = {
    modelo: 'fiesta',
    Fabricante: 'Ford',
    anoModelo: '2020',
    anoFabricacao: '2019',
    acelerar: function() {
        console.log("vrum")
    }
}

const carro2 = {
    modelo: 'KA',
    Fabricante: 'Ford',
    anoModelo: '2020',
    anoFabricacao: '2019',
    acelerar: function() {
        console.log("vrum")
    }
}

// por convenção os objetos começam em maiusculo, criando um atributo 
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {  
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("vrum")
    }
}

const carroDoJoao = new Carro("Fiesta","Ford",2020,2019)
const carroDaMaria = new Carro("KA","Ford",2020,2019)

console.log(carroDoJoao);

console.log(carroDaMaria);

const nome = "Fabricio"
const idade = 24
const ehMaiorDeIdade = true
const conhecimentos = ["engenharia"]

const pessoa = {
    none: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);
console.log(typeof carroDaMaria);

console.log(carroDaMaria instanceof Carro)
console.log(conhecimentos instanceof Array)