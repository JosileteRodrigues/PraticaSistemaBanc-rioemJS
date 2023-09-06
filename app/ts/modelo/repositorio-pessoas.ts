class RepositorioPessoas{

    private pessoas: Array<Pessoa>

    constructor(){
        this.pessoas = new Array<Pessoa>()
    }

    adicionar(pessoa: Pessoa) {
        this.pessoas.push(pessoa);
    }

    pesquisar(nome: string) {
        return this.pessoas.find(pessoa => pessoa.getNome() === nome);
    }

    getPessoas() {
        return this.pessoas;
    }

    remover(nome: string) {
        const pessoaARemover = this.pesquisar(nome);
        if (pessoaARemover) {
            const indiceARemover = this.pessoas.indexOf(pessoaARemover);
            if (indiceARemover > -1) {
                this.pessoas.splice(indiceARemover, 1);
            }
        }
    }


}