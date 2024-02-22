import { api } from "./api"

export const login = async (email: any, password: any): Promise<void> => {
    const data: any  = await api
    if(email && password){
        if(email !== data.email) {
            return alert('E-mail inválio')
        }else {
            alert(`Bem vindo ${email}!`)
        }
    }
}