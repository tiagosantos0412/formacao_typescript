import { useLogin } from "./login"
import { api } from "./api"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('useLogin', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockConta = '09271-8'
    const mockSenha = 'senha'
    const mockName = 'Tiago Felipe dos Santos'

    it('Deve redirecionar para a página main caso a conta e senha sejam validos', async () => {
        const { login } = useLogin() // Obter a função login do objeto retornado por useLogin
        await login(mockConta, mockSenha, mockName) // Chamar a função login
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/1')
    })

    it('não deve redirecionar para a página main sem a conta e senha', async () =>  {
        const { login } = useLogin() // Obter a função login do objeto retornado por useLogin
        await login('', '', '') // Chamar a função login sem argumentos
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
    })

    it('deve exibir um erro, caso a conta seja inválida', async () =>{
        const { login } = useLogin() // Obter a função login do objeto retornado por useLogin
        await login('', '', '') // Chamar a função login sem argumentos
        expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
        expect(mockAlert).toBeCalledWith('Conta inválida')
    })
})
