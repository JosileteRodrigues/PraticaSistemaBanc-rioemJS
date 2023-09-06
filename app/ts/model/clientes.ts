class Clientes {
  private _clientes: Array<Cliente>;

  constructor() {
    this._clientes = new Array<Cliente>();
  }

  inserir(cliente: Cliente) {
    this._clientes.push(cliente);
  }

  remover(cpf: string) {
    this._clientes.forEach((cliente, index) => {
      if (cliente.getCpf() === cpf) {
        this._clientes.splice(index, 1);
      } else {
        console.log("Usuario não encontrado!");
      }
    });
  }

  listar(): Array<Cliente> {
    return this._clientes;
  }

  pesquisar(cpf: string) {
    this._clientes.forEach((cliente) => {
      if (cliente.getCpf() === cpf) {
        return cliente;
      }
    });
  }
}
