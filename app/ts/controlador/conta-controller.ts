class ContaController {
    private repositorioContas: RepositorioContas;

    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta: Conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento: Event) {
        evento.preventDefault();
        const elementoNumero = <HTMLInputElement>document.querySelector('#numero');
        const elementoSaldo = <HTMLInputElement>document.querySelector('#saldo');

        const conta = new Conta(elementoNumero.value,
            Number(elementoSaldo.value));
        this.repositorioContas.adicionar(conta);
        this.inserirContaNoHTML(conta);
    }

    inserirContaNoHTML(conta: Conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.getSaldo();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            (<Element>event.target).parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
