class Pessoa{

    private _nome:string
    private _idade: string
    private _dataNascimento: Date
    private contas: Array<Conta>

    constructor(nome:string, idade:string, dataNasc:Date){
        this._nome = nome
        this._idade = idade
        this._dataNascimento = dataNasc
        this.contas = new Array<Conta>()
    }

    getNome():string{
        return this._nome
    }

    setNome(nome:string){
        this._nome = nome
    }

    getIdade():string{
        return this._idade
    }

    setIdade(idade:string){
        this._idade = idade
    }

    getDataNasc():Date{
        return this._dataNascimento
    }

    setDataNasc(dataNasc:Date){
        this._dataNascimento = dataNasc
    }

    saldoTotalContas(){
        let valorTotal = 0
        this.contas.forEach(conta => {
            valorTotal += conta.getSaldo()
        });
        return valorTotal
    }

    mediaSaldoContas(){

        let media = this.saldoTotalContas()/this.contas.length

        return media
    }

    acrescentarConta(conta:Conta){
        this.contas.push(conta)
    }

    pesquisarConta(numero:string):Conta{
        return
    }

    removerConta(numero:string){
        const conta = this.pesquisarConta(numero)
        const indexConta = this.contas.indexOf(conta)
        this.contas.splice(indexConta,1)
    }

}