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
                        <Stack maxH="full" id="1" h="full">
                            <Heading pb={10}>Cart items</Heading>
                            <Stack direction="column" flex={1} justifyContent="space-between">
                                <Box maxH="550px" overflowY="scroll" >
                                    <ItemListCart />
                                </Box>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between">
                                <Heading fontSize="2xl">TOTAL: </Heading>
                                <Heading fontSize="2xl" color="purple" paddingRight={3}>${total.toLocaleString('ar-AR')}</Heading>
                            </Stack>
                        </Stack>
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