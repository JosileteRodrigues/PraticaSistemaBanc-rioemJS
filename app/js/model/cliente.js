class Cliente {
    constructor(nome, cpf) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getCpf() {
        return this._cpf;
    }
    setCpf(cpf) {
        this._cpf = cpf;
    }
    getConta() {
        return this._conta;
    }
    setConta(conta) {
        this._conta = conta;
    }
}
