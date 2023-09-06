class ClinteController{
    private inputNome: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private clientes: Clientes;

    constructor(){
        this.inputNome = <HTMLInputElement>document.getElementById("nome")
        this.inputCpf = <HTMLInputElement>document.getElementById("cpf")

    }   


    inserir(evento: Event){
        evento.preventDefault();
        let novoCliente = new Cliente(this.inputNome.value, this.inputCpf.value)
        this.clientes.inserir(novoCliente)

    }

    listar(){
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente)
            }
        )
    }


    inserirClienteNoHTML(cliente:Cliente){
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo cliente ' + cliente.toString());
                this.clientes.remover(cliente.getCpf());
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }


}