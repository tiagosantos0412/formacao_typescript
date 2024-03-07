import { api } from "./api"

export const login = async (conta: string, password: string, name: string): Promise<void> => {
    try {
        const data: any  = await api
        if(data){
            const { conta: apiConta, password: apiPassword, name: apiName } = data
            if(conta && password){
                if(conta !== apiConta){
                    return alert('Conta inválida')
                }
                if(password !== apiPassword){
                    return alert('Senha inválida')
                } else {
                    alert(`Bem vindo ${apiName}`)
                }
            }
        }
    } catch (error){
        console.log('Erro ao realizar o login', error)
    }
}