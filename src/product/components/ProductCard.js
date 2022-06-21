import { Box, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { useCart } from '../../cart/hooks';



const ProductCard = ({ product }) => {
    const { cart, add } = useCart()
    // const { isModalOpen, toggleModal } = useModalCart()

    return (
        <Box padding={2}>
            <Box
                backgroundImage={product.image}
                backgroundSize="cover"
                backgroundPosition="center"
                width="100%"
                height="250px"
                borderRadius="6"
                cursor="pointer"
            />
            <Stack paddingY={4} direction="column" paddingX="3" background="white">
                <Heading size='md'>{product.name}</Heading>
                <Text fontWeight="500" color="purple.500">by {product.author}</Text>
                <Stack direction="row" justifyContent="space-between" align="center" paddingTop={2}>
                    <Text fontWeight="600" fontSize="lg">${product.price}</Text>
                    <Button colorScheme='purple' variant='solid' onClick={() => { add(product) }}>
                        Agregar
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ProductCard