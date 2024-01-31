import { Account } from "./Account";

export class DioAccount extends Account {
    constructor(name: string, doc_id: number) {
        super(name, doc_id)
    }

    deposit = (balance: number): void => {
        if(this.validadeStatus()) {
            const newBalance = (this.getBalance() + balance) + 10
            this.setBalance(newBalance)
            console.log('A Dio Account depositou em sua conta e acrescentou mais R$ 10 reais.')
        }
    }
}