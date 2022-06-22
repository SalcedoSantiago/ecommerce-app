import { Box, Button, Heading, Stack, } from "@chakra-ui/react"
import ItemCart from "../components/ItemCart";
import { useCart } from '../hooks';
import { useNavigate } from "react-router-dom";



const CartScreen = () => {
    const { items, total } = useCart();

    const navigate = useNavigate();


    return (
        <Stack direction="column" width="100%" flex={1}>
            <Box paddingX={30} paddingY="50" height="80vh" >
                <Box flex={1}>
                    <Heading>Shopping cart</Heading>
                    <Stack direction="row">
                        <Box paddingY={6}>
                            {items.map(({ product, count }) =>
                                <ItemCart key={product.price} product={product} count={count} />
                            )
                            }
                        </Box>
                        <Box>
                            <Heading>aca la tarjeta</Heading>
                        </Box>
                    </Stack>


                </Box>

                <Stack direction="row" justifyContent="space-between">
                    <Button colorScheme="purple" onClick={() => { navigate("/") }} variant='link'>
                        continue shopping
                    </Button>
                    <Heading>{total}</Heading>
                </Stack>
            </Box>
        </Stack>
    )
}

export default CartScreen