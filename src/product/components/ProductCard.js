import { Box, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { useCart } from '../../cart/hooks';
import { StarIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
    const { add } = useCart()

    return (
        <Box padding={2} >
            <Link to={`/product/${product.id}`}>
                <Box
                    backgroundImage={product.image}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    width="100%"
                    height="250px"
                    borderRadius="6"
                    cursor="pointer"
                />
            </Link>
            <Stack paddingY={4} direction="column" paddingX="3" background="white">
                <Heading size='md'>{product.name}</Heading>
                <Text fontWeight="500" color="purple.500">by {product.author}</Text>
                <Stack direction="row" spacing={1} display="flex" alignItems="center" mt={2}>
                    <StarIcon color="yellow.300" />
                    <StarIcon color="yellow.300" />
                    <StarIcon color="yellow.300" />
                    <StarIcon color="yellow.700" />
                    <StarIcon color="yellow.700" />
                </Stack>

                <Stack direction="row" justifyContent="space-between" align="center" paddingTop={2}>
                    <Text fontWeight="600" fontSize="lg">${product.price}</Text>
                    <Button colorScheme='purple' zIndex={2} variant='solid' onClick={() => { add(product) }}>
                        Agregar
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ProductCard