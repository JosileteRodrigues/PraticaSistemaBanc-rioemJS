class Pessoa {
    _nome;
    _idade;
    _dataNascimento;
    constructor(nome, idade, dataNasc) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNasc;
    }
    getNome() {
        return this._nome;
    }
    setNome(nome) {
        this._nome = nome;
    }
    getIdade() {
        return this._idade;
    }
    setIdade(idade) {
        this._idade = idade;
    }
    getDataNasc() {
        return this._dataNascimento;
    }
    setDataNasc(dataNasc) {
        this._dataNascimento = dataNasc;
    }
}
