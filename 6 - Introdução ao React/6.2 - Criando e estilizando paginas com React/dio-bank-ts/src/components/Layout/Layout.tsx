import { useState } from 'react';
import { Box, Center, ChakraProvider } from "@chakra-ui/react" 

import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"

import './Layout.css'

export const Layout = ({ children }: any) => {
    const [value, setValue] = useState(0)
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