import { login } from "./login"
import { api } from "./api"


describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockConta = '09271-8'
    const mockSenha = 'senha'
    const mockName = 'Tiago Felipe dos Santos'

    it('Deve exibir um alert com boas vindas caso a conta seja valido', async() => {
        await login(mockConta, mockSenha, mockName)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockName}!`)
    })

    it('não deve exibir a mensagem de boas vindas sem a conta', async() =>  {
        await login(mockConta, mockSenha, mockName)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })

    it('deve exibir um erro, caso a conta seja inválida', async() =>{
        await login(mockConta, mockSenha, mockName)
        expect(mockAlert).toBeCalledWith('Conta inválida')
    })
})