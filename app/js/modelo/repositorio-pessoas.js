class RepositorioPessoas {
    pessoas;
    adicionar(pessoa) {
        this.pessoas.push(pessoa);
    }
    pesquisar(nome) {
        return this.pessoas.find(pessoa => pessoa.getNome() === nome);
    }
    getPessoas() {
        return this.pessoas;
    }
    remover(nome) {
        const pessoaARemover = this.pesquisar(nome);
        if (pessoaARemover) {
            const indiceARemover = this.pessoas.indexOf(pessoaARemover);
            if (indiceARemover > -1) {
                this.pessoas.splice(indiceARemover, 1);
            }
        }
    }
}
