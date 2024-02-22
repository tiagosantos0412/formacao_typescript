import {
    ChakraProvider, 
    Input, 
    InputGroup, 
    InputLeftElement, 
    Box, 
    Center,
    Button, 
    Text, 
    Stack, 
    Icon 
  } from '@chakra-ui/react';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importa os ícones desejados
import { login } from '../../services/login';
import { useState } from 'react';

  
export const Card = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState<string>('')
    

    return (
        <ChakraProvider>
            <Box bg={'#15161B'} padding={25}>
                {/* renderização condicional { userData === null || userData === undefined && <h1>Carregando...</h1>} */}
                <Stack spacing={3}>
                <Center>
                    <Text fontSize='50px'>Identifique-se</Text>
                </Center>
                <InputGroup>
                <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaEnvelope} color="gray.300" />}
                    />
                    <Input placeholder='e-mail' value={email} onChange={(event) => 
                        setEmail(event.target.value)
                    } />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Icon as={FaLock} color="gray.300" />}
                    />
                    <Input type='password' placeholder='Enter password' value={password} onChange={(event) => 
                        setPassword(event.target.value)
                    }/>
                </InputGroup>
                
                <Center>
                    <Button
                        onClick={() => login(email, password)}
                        bg={'#a03ad9'}
                        variant='solid'
                        color="white"
                        width='100%'
                        borderRadius={10}
                        _hover={{ bg: '#1e082b' }}
                    >
                    Login
                    </Button>
                </Center>
                </Stack>
            </Box>
        </ChakraProvider>
    )
}