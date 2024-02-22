import { Text, Box, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface ICardButtons {
    text: string
    to: string
    width?: number
    ml?: number
    mr?: number
}

export const CardButtons = ({text, to, width, ml, mr}: ICardButtons) => {
    return (
        <Link to={to}> 
                <Box 
                    backgroundColor={'#F1EFFF'} 
                    color={'#000'}
                    width={width || 300}
                    padding={5}
                    borderRadius={25}
                    ml={ml || 0}
                    mr={mr || 0}
                    >
                    <Text fontSize={'2xl'} fontWeight={'bold'}>
                        <Center>
                            { text }
                        </Center>
                        
                    </Text>
                </Box>
           </Link>
    )
}