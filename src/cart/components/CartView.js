import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Divider,
    Stack,
    Box,
    Button
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useCart, useCartCountItems, useModalCart } from '../hooks'
import ItemCart from './ItemCart';
import ItemListCart from './ItemListCart';

const CartView = (props) => {
    const { toggleModal } = useModalCart()
    const { items } = useCart();
    const count = useCartCountItems()
    const navigate = useNavigate();
    const {
        isOpen,
    } = props


    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={toggleModal}
            size="sm"
            {...props}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <ItemListCart />
                </DrawerBody>

                <Box paddingY="6" paddingX="5" width="100%">
                    <Divider />
                    <Stack paddingY="4" direction="row" justifyContent="space-between">
                        <Box fontWeight="600">
                            Total:
                        </Box>
                        <Box fontWeight="600">
                            $2000
                        </Box>
                    </Stack>
                    <Stack alignItems="center" justifyContent="center" w="100%">
                        <Button colorScheme="purple" onClick={() => { Boolean(count > 0) && navigate('cart') }}>
                            Process to checkout
                        </Button>
                    </Stack>
                </Box>
            </DrawerContent>
        </Drawer>
    )
}

export default CartView;

