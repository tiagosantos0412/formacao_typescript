import { 
    ChakraProvider,
    Flex, 
    Box,
    UnorderedList,
    ListItem,
    Link
  } from '@chakra-ui/react'


  export const Header = () => {
    return (
        <ChakraProvider>
            <Box marginBottom={10} bg={'#000'} height={100}>
            <header className="cabecalho">
                <Flex alignItems="center" justifyContent="space-between" p={4}>
                <Box 
                    className="logo" 
                    bg={'#3d1056'} 
                    color={'white'} 
                    padding={15} 
                    borderRadius={50}
                    width={40}
                    fontSize={30}
                >
                    Dio Bank
                </Box>
                    <UnorderedList listStyleType="none" display="flex" alignItems="center">
                        <ListItem marginRight="15px"><Link _hover={{ color: '#E5E044' }}>Home</Link></ListItem>
                        <ListItem marginRight="15px"><Link _hover={{ color: '#E5E044' }}>Sobre Nós</Link></ListItem>
                        <ListItem><Link _hover={{ color: '#E5E044' }}>Contato</Link></ListItem>
                    </UnorderedList>
                </Flex>
            </header>
            </Box>
        </ChakraProvider>
    )
}