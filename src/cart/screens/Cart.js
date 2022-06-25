import { Box, Button, Center, Flex, Heading, Stack } from "@chakra-ui/react"
import { useCart } from '../hooks';
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import ItemListCart from "../components/ItemListCart";


const CartScreen = () => {
    const { items, total } = useCart();
    const navigate = useNavigate();

    return (
        <Box h="full" paddingY={20}>
            <Stack direction="column" justify="space-between" h="full" >
                <Stack direction="row" h="full" spacing={6} maxH="100%" overflow={'hidden'}>
                    <Stack flex={1}>
                        <Box maxH="100%"> 
                            <Heading pb={10}>Cart items</Heading>
                            <Box maxH="650px" overflowY="scroll">
                                <ItemListCart />

                            </Box>
                        </Box>
                    </Stack>
                    <Box>
                        <Heading pb={10}>Personal info</Heading>
                        <Form />
                    </Box>
                </Stack>
                <Flex justify={'start'} pt={6}>
                    <Button colorScheme="purple" onClick={() => { navigate("/") }} variant='link'>
                        Continue shopping
                    </Button>
                </Flex>
            </Stack>
        </Box >
    )
}

export default CartScreen