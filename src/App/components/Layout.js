
import { Flex, Box, Container, Stack, Image, Text, Center } from "@chakra-ui/react";

const Layout = ({ children }) => {
    return (
        <Flex direction="column" flex={1}>
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
            <Center paddingY={6}>
                <Container maxW="6xl">
                    {children}
                </Container>
            </Center>
        </Flex>
    )
}

export default Layout