import { resolve } from "path"

const conta = {
    id: '1',
    email: 'tiagosantos0412@gmail.com',
    password: 'senha',
    name: 'Tiago Felipe dos Santos',
    balance: 5500
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
