class Clientes {
    constructor() {
        this._clientes = new Array();
    }
    inserir(cliente) {
        this._clientes.push(cliente);
    }
    remover(cpf) {
        this._clientes.forEach((cliente, index) => {
            if (cliente.getCpf() === cpf) {
                this._clientes.splice(index, 1);
            }
            else {
                console.log("Usuario não encontrado!");
            }
        });
    }
    listar() {
        return this._clientes;
    }
    pesquisar(cpf) {
        this._clientes.forEach((cliente) => {
            if (cliente.getCpf() === cpf) {
                return cliente;
            }
        });
    }
}
