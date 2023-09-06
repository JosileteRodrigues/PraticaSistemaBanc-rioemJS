class Empresa extends PessoaJuridica {
    contas;
    constructor(nome, idade, dataNasc, cpf) {
        super(nome, idade, dataNasc, cpf);
        this.contas = new Array();
    }
    saldoTotalContas() {
        let valorTotal = 0;
        this.contas.forEach(conta => {
            valorTotal += conta.getSaldo();
        });
        return valorTotal;
    }
    mediaSaldoContas() {
        let media = this.saldoTotalContas() / this.contas.length;
        return media;
    }
    acrescentarConta(conta) {
        this.contas.push(conta);
    }
    pesquisarConta(numero) {
        return;
    }
    removerConta(numero) {
        const conta = this.pesquisarConta(numero);
        const indexConta = this.contas.indexOf(conta);
        this.contas.splice(indexConta, 1);
    }
}
