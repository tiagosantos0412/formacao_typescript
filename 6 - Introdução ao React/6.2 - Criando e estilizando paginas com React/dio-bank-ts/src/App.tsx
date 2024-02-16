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
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
    <ChakraProvider>
      <Box bg={'#15161B'} padding={25}>
        <Stack spacing={3}>
          <Center>
            <Text fontSize='50px'>Identifique-se</Text>
          </Center>
          <InputGroup>
          <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaEnvelope} color="gray.300" />}
              />
            <Input placeholder='e-mail'/>
          </InputGroup>
          <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaLock} color="gray.300" />}
              />
            <Input type='password' placeholder='Enter password'/>
          </InputGroup>
          
          <Center>
            <Button
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
    </Layout>
  );
}

export default App;
