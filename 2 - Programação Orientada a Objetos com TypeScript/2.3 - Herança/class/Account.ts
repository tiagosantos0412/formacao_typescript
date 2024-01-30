export abstract class Account {
    name: string
    accountNumber: number
    balance: number = 0

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Você depositou em sua conta.')
    }
    withdraw = () => {
        console.log('Você sacou da sua conta.')
    }

    getBalance = () => {
        console.log(this.balance)
    }
}