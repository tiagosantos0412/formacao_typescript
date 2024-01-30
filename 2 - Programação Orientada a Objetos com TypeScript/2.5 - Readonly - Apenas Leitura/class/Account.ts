export abstract class Account {
    private name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = false

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string) => {
        this.name = this.name
        console.log('Nome alterado om sucesso!')
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    deposit = () => {
        if(this.validateStatus()){
            console.log('Você depositou em sua conta.')
        }
    }
    withdraw = () => {
        console.log('Você sacou da sua conta.')
    }

    getBalance = () => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('A conta não está ativa')
    }
}