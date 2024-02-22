import { Box, Grid, GridItem, Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CardButtons } from '../../components/Card/CardButtons'

export const  OpcoesDeposito = () => {
    return (
        <Box className='container'>
            <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Depósito em Dinheiro' to='/deposito-dinheiro/1' width={500}/>
                </GridItem>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Depósito em Cheque' to='/opcoes-deposito/1' width={500}/>
                </GridItem>
                <GridItem colSpan={3} mb={4} ml={7} mr={7}>
                    <Link to='/main'> 
                        <Box 
                            backgroundColor={'#F1EFFF'} 
                            color={'#000'}
                            width={'100%'}
                            padding={5}
                            borderRadius={25}
                            >
                            <Text fontSize={'2xl'} fontWeight={'bold'}>
                                <Center>
                                    Voltar
                                </Center>
                            </Text>
                        </Box>
                    </Link> 
                </GridItem> 
            </Grid>
        </Box>
    )
}