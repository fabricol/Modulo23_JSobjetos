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
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');


// _____________________________________________________________________________________________________________________
// pessoa.sobrenome = 'souza';

// pessoa['sobrenome'] = 'souza';

pessoa['sobrenome'] = 'miranda';

// Explicação linha 88
Object.freeze(pessoa)

pessoa.nome = 'joao'

// Esse tipo de verificação pode gerar problemas c null e undefined, ele n irá executar. Isso n nos indica se existe ou n o atributo 
if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log('tem sobrenome');
}

// Nesse caso apenas o segundo if será executado informando que esse atributo existe, porem a informação é indefinida

console.log(pessoa.nome)
console.log(pessoa['nome'])

// Função que congela o objeto, para que n possa ser alterada os seus atributos
// Essa função foi inserida na linha 69
console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa).length)
console.log(Object.values(pessoa))
console.log(Object.values(pessoa).length)