import { Box } from '@chakra-ui/react';
export const Card = ({ children }: any) => {
    return (
        <Box bg={'#15161B'} padding={25}>
            {/* renderização condicional { userData === null || userData === undefined && <h1>Carregando...</h1>} */}
            { children }
        </Box>
        
    )
}