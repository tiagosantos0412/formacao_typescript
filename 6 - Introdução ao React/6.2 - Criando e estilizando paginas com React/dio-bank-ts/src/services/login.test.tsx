import { login } from "./login"
import { api } from "./api"


describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'tiagosantos0412@gmail'
    const mockSenha = 'senha'

    it('Deve exibir um alert com boas vindas caso o email seja valido', async() => {
        await login(mockEmail, mockSenha)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
    })

    it('não deve exibir a mensagem de boas vindas sem o email', async() =>  {
        await login(mockEmail, mockSenha)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo!')
    })

    it('deve exibir um erro, caso o email seja inválido', async() =>{
        await login('email@invalido.com', mockSenha)
        expect(mockAlert).toBeCalledWith('E-mail inválio')
    })
})