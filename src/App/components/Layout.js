
import { Flex, Container } from "@chakra-ui/react";
import { ProductProvider } from "../../product/context";



const Layout = ({ children }) => {
    return (
        <ProductProvider>
            <Flex direction="column" flex={1} height="100vh" position="relative" overflowY="scroll">
                <Container maxW="6xl" height="100%" >
                    {children}
                </Container>
            </Flex>
        </ProductProvider>

    )
}

export default Layout