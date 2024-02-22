import { 
    Box,
    Stack, 
    Center, 
    Text, 
    InputGroup,
    FormControl,
    FormLabel,
    Input,
    Grid,
    GridItem,
    Flex
 } from "@chakra-ui/react"
 import { CardButtons } from '../../components/Card/CardButtons'

export const DepositoDinheiro = () => {
    return (
        <Box bg={'#F1EFFF'} color={'#000'} height={250} borderRadius={20}>
            <Stack spacing={3}>
                <Center>
                    <Text fontSize='25px'>Informações da conta para Depósito</Text>
                </Center>
                <InputGroup>
                    <FormControl id="agencia" isRequired ml={10}>
                        <FormLabel>Agência</FormLabel>
                        <Input type="text" width={'80px'} borderColor={'#000'}/>
                    </FormControl>
                    <FormControl id="agencia" isRequired ml={10}>
                        <FormLabel>Conta</FormLabel>
                        <Input type="text"  width={'130px'} borderColor={'#000'}/>
                    </FormControl>
                    <FormControl id="agencia" isRequired ml={10}>
                        <FormLabel>Dígito</FormLabel>
                        <Input type="text"  width={'50px'} borderColor={'#000'}/>
                    </FormControl>
                    <Box>
                        <FormControl id="valorTotal" isRequired width={200} mb={10}>
                            <FormLabel>Valor total Dinheiro:</FormLabel>
                            <Input type="text"  width={'150px'} borderColor={'#000'}/>
                        </FormControl>
                    </Box>
                    
                </InputGroup>
                <Box width={'100%'} textAlign="center">
                    <Text fontWeight='bold'>
                        Limite máximo para depósito em dinheiro: R$ 3.000,00
                    </Text>
                </Box>
            </Stack>
            <Flex justify={"space-between"} mt={20}>
                <CardButtons text='Voltar' to='/main'mr={2}/>
                <CardButtons text='Continuar' to='/main' ml={2}/>
            </Flex>
            
        </Box>
    )
}