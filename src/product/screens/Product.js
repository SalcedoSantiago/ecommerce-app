import { useState, useEffect } from 'react';
import { data } from '../api';
import {
    Box,
    Spinner,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../../cart/hooks';
import CartView from '../../cart/components/CartView';
import { useProducts } from '../hook';

const Product = () => {
    const { add } = useCart();
    const navigate = useNavigate();
    const { id } = useParams();
    const { products, getProductById } = useProducts()

    const product = getProductById(id)

    if (!Boolean(product?.id)) {
        return (
            <Flex alignItems="center" justifyContent="center" paddingY={12}>
                <Spinner color='red.500' />
            </Flex>
        )
    }

    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={2}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 18, md: 24 }}>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'product image'}
                        src={product.image}
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'60%'}
                    />
                </Flex>
                <Stack spacing={5}>
                    <Box as={'header'}>
                        <Heading
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize="5xl"
                        >
                            {product.name}
                        </Heading>
                        <Text
                            color={'gray.900'}
                            fontWeight={400}
                            fontSize={'2xl'}>
                            ${(product.price).toLocaleString('ar-AR')}
                        </Text>
                    </Box>
                    <Stack
                        direction={'column'}
                        divider={<StackDivider borderColor={'gray.200'} />}
                        spacing={6}
                    >
                        <Text
                            fontSize="md"
                            fontWeight="400"
                        >
                            {product.description}
                        </Text>
                    </Stack>
                    <Button colorScheme="purple" onClick={() => { add(product) }}>
                        Add to cart
                    </Button>
                </Stack>

                <Flex justify={'start'} pt={6}>
                    <Button colorScheme="purple" onClick={() => { navigate("/") }} variant='link'>
                        Continue shopping
                    </Button>
                </Flex>
            </SimpleGrid>
            <CartView />
        </Container>
    );
}

export default Product;