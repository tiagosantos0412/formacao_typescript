export abstract class Account {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string) => {
        this.name = name
    }
    getName = (): string => {
        return this.name
    }
    getAccountNumber = (): number => {
        return this.accountNumber
    }

    setBalance = (balance: number) => {
        this.balance = balance
    }
    getBalance = ():number => {
        return this.balance
    }

    deposit = (balance: number): void => {
        if(this.validadeStatus()) {
            this.balance += balance
            console.log('Voce depositou em sua conta.')
        }
        
    }

    withdraw = (saque: number):void => {
        if(this.validadeStatus()) {
            if(this.balance > saque) {
                this.balance -= saque
                console.log('Você sacou de sua conta.')
            } else {
                console.log('Você não possui saldo suficinete para realizar esta operação!')
            }
        }
    }

    validadeStatus = (): boolean => {
        if(this.status) {
            return this.status
        }

        throw new Error('Aconta não está ativa.')
    }
    printBalance(accountNumber: number, name: string, balance: number): void {
        console.log('***************************************************************************')
        console.log('*                            DIO BANKING                                  *')
        console.log('***************************************************************************')
        console.log('                           EXTRATO DE CONTA')
        console.log(` Conta: ${accountNumber} \n Nome: ${name} \n Saldo: ${balance}`)
        console.log('---------------------------------------------------------------------------')
    }
}