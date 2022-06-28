
import { Flex, Box, Container, Stack, Heading } from "@chakra-ui/react";
import { ProductProvider } from "../../product/context";



const Layout = ({ children }) => {
    return (
        <ProductProvider>
            <Flex direction="column" flex={1} height="100vh" position="relative"  overflowY="scroll">
                {/* <Box>
                    <Container maxW="6xl" paddingY={2} >
                        <Stack direction="row" align="center" justifyContent="center" paddingY={3} flex={1}>
                            <Heading fontStyle='italic' fontWeight={600} color="purple.700">Store</Heading>
                        </Stack>
                    </Container>
                </Box> */}
                <Container maxW="6xl" height="100%" >
                    {children}
                </Container>
            </Flex>
        </ProductProvider>

    )
}

export default Layout