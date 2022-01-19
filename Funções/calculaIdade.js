//Atividade2
//Criando objetos pessoa
const pessoa1 = {
  nome: "João",
  idade: 35,
  sobrenome: "Costa",
};

const pessoa2 = {
  nome: "Carlos",
  idade: 27,
  sobrenome: "Augusto",
};

//criando uma função para calcular a idade após n anos usando this
function calculaIdade(anos) {
  return `Daqui a ${anos}, ${this.nome + " " + this.sobrenome} terá ${
    this.idade + anos
  } anos de idade.`;
}

//Usando os métodos call e apply
console.log(calculaIdade.call(pessoa1, 4));
console.log(calculaIdade.apply(pessoa2, [10]));
