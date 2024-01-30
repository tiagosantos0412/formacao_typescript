import { Account } from "./Account"

export class CompanyAccount extends Account{
    cnpj: number

    constructor(cnpj: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.cnpj = cnpj
    }

    //empréstimo
    getLoan = () => {
        console.log('Você pegou um empréstimo!')
    }

    //Aplicando o conceito de polimorfismo
    deposit = () => {
        console.log('A empresa depositou em sua conta.')
    }
}