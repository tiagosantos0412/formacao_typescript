import { Box, Text } from "@chakra-ui/react"

interface ICardInfo {
    mainContent: string
    content: string
}

export const CardInfo = ({ mainContent,  content }: ICardInfo) => {
    return (
        <Box 
            backgroundColor={'#F1EFFF'} 
            minHeight={'25vh'} 
            color={'#000'}
            width={350}
            padding={5}
            borderRadius={25}
            >
            <Text fontSize={'2xl'} fontWeight={'bold'}>
                { mainContent }
            </Text>
            <Text fontSize={'xl'}>
                { content }
            </Text>
        </Box>     
    )
}