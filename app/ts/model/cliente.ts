class Cliente {
  private _nome: string;
  private _cpf: string;
  private _conta: Conta;

  constructor(nome: string, cpf: string) {
    this._nome = nome;
    this._cpf = cpf;
    this._conta;
  }

  getNome(): string {
    return this._nome;
  }

  setNome(nome: string) {
    this._nome = nome;
  }

  getCpf(): string {
    return this._cpf;
  }

  setCpf(cpf: string) {
    this._cpf = cpf;
  }

  getConta(): Conta {
    return this._conta;
  }

  setConta(conta: Conta) {
    this._conta = conta;
  }
}
