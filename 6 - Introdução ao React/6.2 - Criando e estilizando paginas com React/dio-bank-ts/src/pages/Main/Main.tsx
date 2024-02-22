import { Box, Grid, GridItem, Center, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { CardButtons } from '../../components/Card/CardButtons'

export const Main = () => {
    return (
        <Box className='container'>
            <Grid templateColumns={'repeat(3, 1fr)'} gap={4}>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Depósito' to='/' />
                </GridItem>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Saque' to='/' />
                </GridItem>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons to='/conta/1' text='Saldo na Tela' />
                </GridItem>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Pagamentos' to='/' />
                </GridItem>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Transferência' to='/' />
                </GridItem>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Empréstimo' to='/' />
                </GridItem>
                <GridItem colSpan={3} mb={4} ml={7} mr={7}>
                    <Link to='/'> 
                        <Box 
                            backgroundColor={'#F1EFFF'} 
                            color={'#000'}
                            width={'100%'}
                            padding={5}
                            borderRadius={25}
                            >
                            <Text fontSize={'2xl'} fontWeight={'bold'}>
                                <Center>
                                    Sair
                                </Center>
                            </Text>
                        </Box>
                    </Link> 
                </GridItem>                 
            </Grid>
        </Box>
    )
}