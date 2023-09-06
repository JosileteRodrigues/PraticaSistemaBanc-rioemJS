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

const pessoa =  new Pessoa("Maria","27",new Date("1996-12-12"))

const pessoaFisica = new PessoaFisica("Pedro","32",new Date("1991-05-30"),"12345678911")

const pessoaJuridica = new PessoaJuridica("Pedro","32",new Date("1991-05-30"),"1234598782348237784781823")

console.log(`Pessoa:\nNome: ${pessoa.getNome()}\nIdade: ${pessoa.getIdade()} Data de nascimento: ${pessoa.getDataNasc()}`)

console.log(`Pessoa Física:\nNome: ${pessoaFisica.getNome()}\nIdade: ${pessoaFisica.getIdade()} Data de nascimento: ${pessoaFisica.getDataNasc()}\nCPF: ${pessoaFisica.cpf}`)

console.log(`Pessoa Jurídica:\nNome: ${pessoaJuridica.getNome()}\nIdade: ${pessoaJuridica.getIdade()} \nData de nascimento: ${pessoaJuridica.getDataNasc()}\nCNPJ: ${pessoaJuridica.cnpj}`)


//Pessoa - Clientes e empresas

const conta1 = new Conta("12345",2000)
const conta2 = new ContaBonificada("18875",989000)
const conta3 = new Conta("12995",8000)
const conta4 = new Conta("43575",5000)
const conta5 = new ContaBonificada("89565",34000)
const conta6 = new Conta("12956",8900)
const conta7 = new Conta("39245",57000)
const conta8 = new Conta("55645",80000)



const cliente1 = new Cliente("maria","27",new Date("1996-06-02"),"1234543212")
const cliente2 = new Cliente("juan","34",new Date("1993-04-23"),"1237543872")
const cliente3 = new Cliente("Melina","23",new Date("1999-08-12"),"1238978767")

cliente1.acrescentarConta(conta1)
cliente1.acrescentarConta(conta2)
cliente2.acrescentarConta(conta3)
cliente3.acrescentarConta(conta4)

const empresa1 = new Empresa("Sandra Fas","85",new Date("1954-04-23"),"654356780987654334567732")
const empresa2 = new Empresa("Vitor Lort","45",new Date("1972-07-13"),"654352353456454535456772")
const empresa3 = new Empresa("Pereira Fort","35",new Date("1985-09-14"),"6543587676587654334567732")

empresa1.acrescentarConta(conta5)
empresa2.acrescentarConta(conta6)
empresa3.acrescentarConta(conta7)
empresa3.acrescentarConta(conta8)

const repoPessoas = new RepositorioPessoas()

repoPessoas.adicionar(cliente1)
repoPessoas.adicionar(cliente2)
repoPessoas.adicionar(cliente3)

repoPessoas.adicionar(empresa1)
repoPessoas.adicionar(empresa2)
repoPessoas.adicionar(empresa3)

//Removendo
repoPessoas.remover("juan")

// Pesquisa individual
const resuPessoa = repoPessoas.pesquisar("maria")

const resuConta = resuPessoa.pesquisarConta("18875")

console.log(`Pesquisando conta de ${resuPessoa.getNome()}:\n${resuConta.numero}\nSaldo: ${resuConta.getSaldo()}`)

// Pesquisa todas as contas
let listaPessoa = repoPessoas.getPessoas()

listaPessoa.forEach((pessoa)=>{
    console.log(`
    Nome: ${pessoa.getNome()}\n
    Saldo total das contas: ${pessoa.saldoTotalContas()}\n
    Saldo medio:${pessoa.mediaSaldoContas()}
    
    
    `)
})
