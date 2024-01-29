/**
 *Dio Banking
    name, accountNumber
    depositar, sacar
 */

class Account {
    name: string
    accountNumber: number

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
}

const conta1: Account = new Account('Tiago Felipe dos Santos', 123325)
console.log(conta1)
conta1.deposit()
conta1.withdraw()

const conta2: Account = new Account('Viviane Assis dos Santos', 125448)
console.log(conta2)
conta2.deposit()
conta2.withdraw()
console.log(typeof(conta2))