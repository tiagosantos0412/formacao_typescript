import { Text, Box, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface ICardButtons {
    text: string
    to: string
}

export const CardButtons = ({text, to}: ICardButtons) => {
    return (
        <Link to={to}> 
                <Box 
                    backgroundColor={'#F1EFFF'} 
                    color={'#000'}
                    width={200}
                    padding={5}
                    borderRadius={25}
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