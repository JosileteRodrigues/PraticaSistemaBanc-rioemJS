class PessoaFisica extends Pessoa {

    private _cpf: string

    constructor(nome:string, idade:string, dataNasc:Date, cpf:string){
        super(nome + " - Física",idade,dataNasc)
        this._cpf = cpf
    }

    get cpf():string{
        return this._cpf
    }
}
