
import { Flex, Box, Container, Stack, Image, Text, Center } from "@chakra-ui/react";

const Layout = ({ children }) => {
    return (
        <Flex direction="column" flex={1} height="100vh">
            <Container maxW="6xl" height="100%" >
                {children}
            </Container>
        </Flex>
    )
}

export default Layout