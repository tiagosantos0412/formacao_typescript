import { Account } from "./Account";

export class PeopleAccount extends Account{
    private doc_id: number

    constructor(doc_id: number, name:string, accountNumber: number) {
        super(name, accountNumber)
        this.doc_id = doc_id
    }

    setDoc_id = (doc_id: number) =>{
        this.doc_id = doc_id
    }

    getDoc_id = (): number => {
        return this.doc_id
    }

}