class PessoaJuridica extends Pessoa{

    private _cnpj:string

    constructor(nome:string, idade: string, dataNasc:Date, cnpj:string){
        super(nome + " - Jurídica",idade,dataNasc)
        this._cnpj = cnpj
    }

    get cnpj(){
        return this._cnpj
    }
}