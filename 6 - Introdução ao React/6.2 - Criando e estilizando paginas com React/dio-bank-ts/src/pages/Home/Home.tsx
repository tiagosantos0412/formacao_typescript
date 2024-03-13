import { useState } from 'react'
import { Button, Center, Icon, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import { Card } from '../../components/Card/Card'
import { useLogin } from '../../services/login' 
import { FaCreditCard, FaLock } from 'react-icons/fa'

export const Home = () => {
    const { login } = useLogin()
    const [conta, setConta] = useState('')
    const [password, setPassword] = useState<string>('')
    const [name] = useState<string>('')

    const handleLogin = async () => {
        await login(conta, password, name)
    }

    return (
        <Card>
            <Stack spacing={3}>
                <Center>
                    <Text fontSize='50px'>Identifique-se</Text>
                </Center>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaCreditCard} color="gray.300" />}
                    />
                    <Input placeholder='nº da conta' value={conta} onChange={(event) =>
                        setConta(event.target.value)
                    } />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaLock} color="gray.300" />}
                    />
                    <Input type='password' placeholder='Enter password' value={password} onChange={(event) =>
                        setPassword(event.target.value)
                    } />
                </InputGroup>

                <Center>
                    <Button
                        onClick={handleLogin}
                        bg={'#a03ad9'}
                        variant='solid'
                        color="white"
                        width='100%'
                        borderRadius={10}
                        _hover={{ bg: '#3d1056' }}
                    >
                        Login
                    </Button>
                </Center>
            </Stack>
        </Card>
    )
}
