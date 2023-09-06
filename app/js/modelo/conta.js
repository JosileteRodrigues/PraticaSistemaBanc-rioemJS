class Conta {
    saldo;
    //modificadores de acesso
    //java
    // vazio: friendly: pacote
    // public: qualquer parte do código
    // private: apenas a classe
    // protected: classes da herança
    // TS
    // vazio ou public
    // private
    // protected
    // readonly
    nome;
    _numero;
    constructor(numero, saldo = 0) {
        this.saldo = saldo;
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    getSaldo() {
        return this.saldo;
    }
    debitar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
    creditar(valor) {
        this.saldo += valor;
    }
    transferir(destino, valor) {
        this.debitar(valor);
        destino.creditar(valor);
    }
}
