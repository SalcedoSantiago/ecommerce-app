import { useState } from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Divider,
    Stack,
    Box,
    Text,
    Button
} from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";
import { useCart, useCartCountItems } from '../hooks'
import ItemListCart from './ItemListCart';

const CartView = (props) => {
    const [isModalOpen, toggleModal] = useState(false);
    const { total } = useCart();
    const count = useCartCountItems();
    const navigate = useNavigate();

    return (
        <>
            {isModalOpen && (
                <Drawer
                    isOpen={isModalOpen}
                    placement='right'
                    onClose={() => { toggleModal((isOpen) => !isOpen) }}
                    size="sm"
                    {...props}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Your cart</DrawerHeader>
                        <DrawerBody maxH="100%" overflowY="scroll">
                            <ItemListCart />
                        </DrawerBody>
                        <Box paddingY="6" paddingX="5" width="100%">
                            <Divider />
                            <Stack paddingY="4" direction="row" justifyContent="space-between">
                                <Box fontWeight="600">
                                    Total:
                                </Box>
                                <Box fontWeight="600">
                                    ${total.toLocaleString('ar-Ar')}
                                </Box>
                            </Stack>
                            <Stack alignItems="center" justifyContent="center" w="100%">
                                <Button
                                    disabled={!Boolean(count > 0)}
                                    colorScheme={'purple'}
                                    onClick={() => {
                                        Boolean(count > 0) && navigate('../cart', { replace: true })
                                    }
                                    }>
                                    Process to checkout
                                </Button>
                            </Stack>
                        </Box>
                    </DrawerContent>
                </Drawer>
            )
            }
            <Stack align="center" position="sticky" bottom={0} marginBottom="5" paddingY={3} >
                <Box zIndex={2}>
                    <Button colorScheme="purple" onClick={() => { toggleModal(true) }}>
                        <Text>ver carrito {count ? `${count} items` : ''} </Text>
                    </Button>
                </Box>
            </Stack>
        </>

    )
}

export default CartView;

