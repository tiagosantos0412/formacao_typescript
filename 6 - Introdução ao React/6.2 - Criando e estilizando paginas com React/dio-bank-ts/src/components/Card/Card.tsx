import { Box } from '@chakra-ui/react';
export const Card = ({ children }: any) => {
    return (
        <Box bg={'#2D2D38'} padding={30} borderRadius={40}>
            {/* renderização condicional { userData === null || userData === undefined && <h1>Carregando...</h1>} */}
            { children }
        </Box>
        
    )
}