import { Box, Text } from "@chakra-ui/react"

interface ICardInfo {
    mainContent: string
    content: string
    width?: number
}

export const CardInfo = ({ mainContent,  content, width }: ICardInfo) => {
    return (
        <Box 
            backgroundColor={'#F1EFFF'} 
            minHeight={'25vh'} 
            color={'#000'}
            width={width || 350}
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