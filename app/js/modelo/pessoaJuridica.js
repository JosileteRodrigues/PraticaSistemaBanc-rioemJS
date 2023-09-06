class PessoaJuridica extends Pessoa {
    _cnpj;
    constructor(nome, idade, dataNasc, cnpj) {
        super(nome + " - Jurídica", idade, dataNasc);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
}
