class clienteEspecial extends Cliente{
    
    private dependentes : Array<Cliente>

    constructor(nome:string,cpf:string){
        super(nome,cpf)
    }
}