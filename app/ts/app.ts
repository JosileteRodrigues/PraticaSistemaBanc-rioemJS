let contaController = new ContaController();
let clinteController = new ClinteController()

contaController.listar();

const c1 = new Conta("1", 100);
const p1 = new Poupanca("2", 100);
const cb1 = new ContaBonificada("3", 0);

console.log("Conta: " + c1.saldo);

p1.atualizarSaldoAniversario();
console.log("Poupanca: " + p1.saldo);

cb1.creditar(100);
console.log("Conta Bonificada: " + cb1.saldo);

// CONTAS

const clientes = new Clientes()

const cliente1 = new Cliente("Josilete","12365478911")
const cliente2 = new Cliente("Maria","12365478921")
const cliente3 = new Cliente("Sabrina","12365478931")

clientes.inserir(cliente1)
clientes.inserir(cliente2)
clientes.inserir(cliente3)

clinteController.listar()

clientes.remover("12365478921")

clinteController.listar()

clientes.pesquisar("12365478921")
clientes.pesquisar("12365478911")


