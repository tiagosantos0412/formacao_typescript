import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { Card } from "../Card/Card"
import { Box, Center, ChakraProvider } from "@chakra-ui/react" 
import './Layout.css'

export const Layout = () => {
    return (
        <ChakraProvider>
            <Box minHeight={'100vh'} backgroundColor={'#15161B'} color={'#fff'}>
                <Header />
                <Center>
                    <Card />
                </Center>
                <Footer />
            </Box>
        </ChakraProvider>
    )
}