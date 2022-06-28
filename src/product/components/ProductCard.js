import { Box, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { useCart } from '../../cart/hooks';
import { StarIcon } from "@chakra-ui/icons";
import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {

    const { add } = useCart()
    const {
        name,
        image,
        author,
        price,
        rate,
        id
    } = product;

    return (
        <Box padding={2} >
            <Link to={`/product/${id}`}>
                <Box
                    backgroundImage={image || 'https://via.placeholder.com/150'}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    width="100%"
                    height="200px"
                    borderRadius="6"
                    cursor="pointer"
                />
            </Link>
            <Stack paddingY={4} direction="column" paddingX="2" background="white">
                <Heading size='md'>{name || 'No unable'}</Heading>
                <Text fontWeight="500" color="purple.500">by {author || 'Vicent'}</Text>
                <Stack direction="row" spacing={1} display="flex" alignItems="center" mt={2}>
                    {[1, 2, 3, 4, 5].map((index) =>
                        <StarIcon key={index} color={rate >= index ? 'yellow.300' : 'yellow.700'} />
                    )
                    }
                </Stack>

                <Stack direction="row" justifyContent="space-between" align="center" paddingTop={2}>
                    <Text fontWeight="600" fontSize="lg">${price.toLocaleString('ar-AR') || 0}</Text>
                    <Button colorScheme='purple' zIndex={2} variant='solid' onClick={() => { add(product) }}>
                        Agregar
                    </Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default ProductCard