// Introdução a programação orientada a objetos
// Definição de uma classe:
class Usuario {
    // propriedades:
    nome: string
    cpf: string
    email: string
    login?: number
    senha?: string

    //Método construtor
    constructor(nome: string, cpf: string, email: string, login: number, senha: string) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.login = login
        this.senha = senha
    }

    // método
    exibirUsuario = () => {
        console.log(`Usuário: ${this.nome}, ${this.cpf}, ${this.email}, ${this.login}, ${this.senha}`)
    }
}

const user1 = new Usuario('Tiago', '36568593885', 'tiagosantos0412@gmail.com', 256, 'senha@2024')
user1.exibirUsuario()

