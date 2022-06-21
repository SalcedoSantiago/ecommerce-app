import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input
} from '@chakra-ui/react'
import { useModalCart } from '../hooks'

const CartView = (props) => {

    const { toggleModal } = useModalCart()

    const {
        isOpen,
    } = props


    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={toggleModal}
            {...props}
        // finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                    <Input placeholder='Type here...' />
                </DrawerBody>

                <DrawerFooter>
                    <Button variant='outline' mr={3} onClick={toggleModal}>
                        Enviar orden
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CartView;

