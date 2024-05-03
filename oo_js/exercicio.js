function Veiculo(modelo, fabricante) {
    this.modelo = modelo;
    this.fabricante = fabricante;

    this.acelerar = function() {
        console.log("barulho de motor");
    }
}

function Carro(modelo, fabricante, preco) {
    Veiculo.call(this, modelo, fabricante);
    this.qtd_rodas =  4;

    this.buzinar = function() {
        console.log("buuummmmmmmm");
    }

    let _preco = preco;

    // Definindo getPreco no protótipo de Carro
    Carro.prototype.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        }
    }
}

function Moto(modelo, fabricante, preco) {
    Veiculo.call(this, modelo, fabricante);
    this.qtd_rodas =  2;

    this.buzinar = function() {
        console.log("bi bi");
    }

    let _preco = preco;

    // Definindo getPreco no protótipo de Carro
    Moto.prototype.getPreco = function() {
        return _preco;
    }

    this.setPreco = function(valor) {
        if (typeof valor === 'number') {
            _preco = valor;
        }
    }
}




const carro1 = new Carro("polo", "VW", 90000);
const moto1 = new Moto("cg","Honda",15000)
const barco1 = new Veiculo("Lancha","Baylinner")

console.log(carro1);
console.log(carro1.getPreco());
console.log(moto1);
console.log(moto1.getPreco());
console.log(barco1)

