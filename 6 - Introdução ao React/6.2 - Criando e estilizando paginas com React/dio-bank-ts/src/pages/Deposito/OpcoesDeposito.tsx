import { Box, Grid, GridItem, Flex } from '@chakra-ui/react'
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
            </Grid>
            <Flex justify="flex-start" mt={4} ml={7}>
                <CardButtons text='Voltar' to='/main' />
            </Flex>
        </Box>
    )
}