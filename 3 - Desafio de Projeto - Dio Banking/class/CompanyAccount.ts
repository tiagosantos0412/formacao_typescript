import { Account } from "./Account";

export class CompanyAccount extends Account {
    private cnpj : number

    constructor(cnpj: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.cnpj = cnpj
    }

     //empréstimo
     getLoan = (loan: number) => {
        if(this.validadeStatus()){
            const newBalance = this.getBalance() + loan
            this.setBalance(newBalance)
            console.log('Você pegou um empréstimo!')
        }
    }

    //Aplicando o conceito de polimorfismo
    deposit = (deposit: number): void => {
        if(this.validadeStatus()){
            const newBalance = this.getBalance() + deposit
            this.setBalance(newBalance)
            console.log('A empresa depositou em sua conta.')
        }
    }
}