import { Box, Grid, GridItem, Flex } from '@chakra-ui/react'

import { CardButtons } from '../../components/Card/CardButtons'

export const Main = () => {
    return (
        <Box className='container'>
            <Grid templateColumns={'repeat(3, 1fr)'} gap={4}>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Depósito' to='/opcoes-deposito/1' />
                </GridItem>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Saque' to='/' />
                </GridItem>
                <GridItem mb={4} ml={7} mr={7}>
                    <CardButtons text='Saldo na Tela' to='/conta/1'/>
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
            </Grid>
            <Flex justify="flex-end" mt={4} mr={7}>
                <CardButtons text='Sair' to='/' />
            </Flex>
        </Box>
    )
}