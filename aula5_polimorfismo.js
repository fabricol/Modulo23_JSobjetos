function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function () {
        console.log(this.nome + " diz olá");
    }    
    this.dizCargo = function() {
        console.log(this.cargo);
    }
}

function Funcionario(nome, cargo,salario){
    this.cargo = cargo;
    let _salario = salario;
    // getSalario getters
    this.retornaSalario = function() {
        return `O salario de ${this.nome} é ${_salario}`;
    }
    // setSalario setters
    this.atribuiSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }
    Pessoa.call(this, nome);
}

const funcionario1 = new Funcionario("Maria","dev",5000)


// Introdução a encapsulamento
// O salário n pode ficar disponível para qualquer um e poderia ser facilmente alterado:

// funcionario1.salario = 1000

// N é possivel ter o retorno de um atributo privado com "."
console.log(funcionario1.salario)

funcionario1.atribuiSalario('mil');

console.log(funcionario1.retornaSalario())

// Para alterar as informações:


