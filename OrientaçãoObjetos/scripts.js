//1.criando a classe conta bancária
class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }
  //2.construindo o getter e o setter de saldo
  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
  //3.criando os métodos sacar e depositar
  sacar(valor) {
    if (valor > this._saldo) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }
  depositar(valor) {
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}

//4. Criando uma classe filha chamada Conta Corrente que herda todos esses parametros e possui outro parametro cartaoCredito.
class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente"; //6. tipo corrente por padrão
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  //5.construindo o getter e o setter de cartaoCredito
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

//7. criar uma classe filha chamada ContaPoupanca e ContaUniversitaria que herda os parametros da ContaCorrente
class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupanca";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "universitaria";
  }
  //8.saque da conta universitária não poderá ser acima de R$500
  sacar(valor) {
    if (valor > 500) {
      return "Operação negada! Valor do saque acima do permitido.";
    }
    this._saldo = this._saldo - valor;
  }
}
