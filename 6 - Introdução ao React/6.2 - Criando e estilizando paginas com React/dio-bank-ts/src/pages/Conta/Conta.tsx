import { Center, SimpleGrid, Spinner, Flex } from "@chakra-ui/react"
import { CardInfo } from "../../components/Card/CardInfo"
import { useState, useEffect, useContext } from "react"
import { api } from "../../services/api"
import { useParams, useNavigate } from "react-router-dom"
import { CardButtons } from "../../components/Card/CardButtons"
import { AppContext } from "../../components/AppContext/AppContext"


interface UserData {
    id: string
    email: string
    password: string
    name: string
    balance: number
}

export const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)
    console.log('Retorno da página conta', isLoggedIn)
    !isLoggedIn && navigate('/')
   
    if(userData && id !== userData.id) {
        navigate('/')
    }

    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }
        getData()
    },[])

    const actualData = new Date()
          
    const day = actualData.getDate().toString().padStart(2, '0')  
    const month = (actualData.getMonth() + 1).toString().padStart(2, '0');
    const year = actualData.getFullYear();
    const hours = actualData.getHours().toString().padStart(2, '0');
    const minutes = actualData.getMinutes().toString().padStart(2, '0');

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={10}>
                {
                    userData === undefined || userData === null?
                    (
                        <Center>
                            <Spinner size={'xl'} color='#fff'/>
                        </Center>
                    ) :
                    (
                        <>
                            <CardInfo mainContent={`Bem vindo ${userData?.name}`} 
                                content={`${day}/${month}/${year} - ${hours}:${minutes}`}
                            />
                            <CardInfo mainContent='Saldo em conta: ' content={`R$ ${userData?.balance}`}/>
                            
                            <Flex justify="flex-start" mt={4} mr={7}>
                                <CardButtons text='Voltar' to='/main' />
                            </Flex>
                        </>
                    )
                }

            </SimpleGrid>
        </Center>
        
    )
}