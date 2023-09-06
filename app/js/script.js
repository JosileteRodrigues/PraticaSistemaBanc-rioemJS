const c1 = new Conta('1', 100);
const c2 = new Conta('2');
// console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();
const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
// console.log(contaBonificada.getSaldo());
// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
// PESSOA - FISICA - JURIDICA
const pessoa = new Pessoa("Maria", "27", new Date("1996-12-12"));
const pessoaFisica = new PessoaFisica("Pedro", "32", new Date("1991-05-30"), "12345678911");
const pessoaJuridica = new PessoaJuridica("Pedro", "32", new Date("1991-05-30"), "1234598782348237784781823");
console.log(`Pessoa:\nNome: ${pessoa.getNome()}\nIdade: ${pessoa.getIdade()} Data de nascimento: ${pessoa.getDataNasc()}`);
console.log(`Pessoa Física:\nNome: ${pessoaFisica.getNome()}\nIdade: ${pessoaFisica.getIdade()} Data de nascimento: ${pessoaFisica.getDataNasc()}\nCPF: ${pessoaFisica.cpf}`);
console.log(`Pessoa Jurídica:\nNome: ${pessoaJuridica.getNome()}\nIdade: ${pessoaJuridica.getIdade()} \nData de nascimento: ${pessoaJuridica.getDataNasc()}\nCNPJ: ${pessoaJuridica.cnpj}`);
