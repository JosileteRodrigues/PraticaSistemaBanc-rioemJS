class RepositorioContas {

    readonly contas: Array<Conta>;

    constructor() {
        this.contas = new Array<Conta>();
    }

    adicionar(conta: Conta) {
        this.contas.push(conta);
    }

    pesquisar(numero: string) {
        return this.contas.find(conta => conta.numero === numero);
    }

    getContas() {
        return this.contas;
    }

    remover(numero: string) {
        const contaARemover = this.pesquisar(numero);
        if (contaARemover) {
            const indiceARemover = this.contas.indexOf(contaARemover);
            if (indiceARemover > -1) {
                this.contas.splice(indiceARemover, 1);
            }
        }
    }
}
