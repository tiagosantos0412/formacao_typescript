import { Center, Link, Box } from "@chakra-ui/react"

export const Footer = () => {
    return (
        <footer className="rodape">
            <Box bg={'#000'} padding={3} position="absolute" bottom="0" width="100%">
                <Center>
                    <p>Desenvolvido por <Link color={'#23CE52'} href="https://www.linkedin.com/in/tiago-felipe-dos-santos-55938b27b/" isExternal>Tiago Felipe dos Santos</Link></p>
                </Center>
            </Box>
        </footer>
    )
}