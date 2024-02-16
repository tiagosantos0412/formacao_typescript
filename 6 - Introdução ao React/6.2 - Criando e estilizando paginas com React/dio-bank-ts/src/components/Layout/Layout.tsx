import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

import { Box, Center, ChakraProvider } from "@chakra-ui/react" 
import './Layout.css'

export const Layout = ({ children }: any) => {
    return (
        <ChakraProvider>
            <Box minHeight={'100vh'} backgroundColor={'#15161B'} color={'#fff'}>
                <Header />
                <Center>
                    { children }
                </Center>
                <Footer />
            </Box>
        </ChakraProvider>
    )
}