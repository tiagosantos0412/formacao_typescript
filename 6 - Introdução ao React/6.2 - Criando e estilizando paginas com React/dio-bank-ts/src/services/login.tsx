import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "./api"
import { AppContext } from "../components/AppContext/AppContext"

export const useLogin = () => {
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    
    const login = async (conta: string, password: string, name: string): Promise<void> => {
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
                        setIsLoggedIn(true)
                        navigate(`/main/${data.id}`)
                    }
                }
            }
        } catch (error){
            console.log('Erro ao realizar o login', error)
        }
    }

    return { login } // Retornando um objeto com a função login
}
