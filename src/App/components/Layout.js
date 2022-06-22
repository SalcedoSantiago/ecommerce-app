
import { Flex, Box, Container, Stack, Image, Text, Center } from "@chakra-ui/react";

const Layout = ({ children }) => {
    return (
        <Flex direction="column" flex={1} height="100vh">
            <Box>
                <Container maxW="6xl">
                    <Stack direction="row" align="center" justifyContent="space-between" paddingY={3}>
                        <Image src="" width="5" height="5" />
                        <Stack direction="row" align="center">
                            <Text>Home</Text>
                            <Text>About</Text>
                            <Text>Store</Text>
                            <Text>Contact</Text>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            <Container maxW="6xl" >
                {children}
            </Container>
        </Flex>
    )
}

export default Layout