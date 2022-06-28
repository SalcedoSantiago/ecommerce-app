import { useState, useEffect } from 'react';
import { ArrowLeftIcon } from "@chakra-ui/icons";

import {
    Box,
    Spinner,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../../cart/hooks';
import CartView from '../../cart/components/CartView';
import { useProducts } from '../hook';
import ProductList from '../components/ProductList';

const Product = () => {
    const { add } = useCart();
    const navigate = useNavigate();
    const { id } = useParams();
    const { products, getProductById } = useProducts()
    const [count, setCount] = useState(1);

    const product = getProductById(id)

    const productsRelated = products.filter(({ author, name }) => author == product.author && name != product.name);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        setCount(1);
    }, [product])


    if (!Boolean(product?.id)) {
        return (
            <Flex alignItems="center" justifyContent="center" paddingY={12}>
                <Spinner color='red.500' />
            </Flex>
        )
    }

    const handleCounter = (increment = false) => {
        setCount((count) => increment ? count + 1 : count - 1)
    }

    return (
        <Container maxW={'7xl'} position="relative">
            <Button
                onClick={() => { navigate("/") }}
                colorScheme="purple"
                boxShadow="md"
                cursor="pointer"
                left={0}
                top={0}
                marginTop={10}
                paddingX={4}
                paddingY={3}
                position="absolute"
            >
                <ArrowLeftIcon
                    color="white"
                />
                <Text paddingX={2} display="inline-block">Back to Shopping</Text>
            </Button>
            <SimpleGrid
                max-height={'600px'}
                columns={2}
                alignItems="center"
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
                            fontWeight={600}
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

                    <Stack align="center" spacing={5} direction="row">
                        <NumberInput size='lg' maxW={9999} defaultValue={1} min={1} value={count} >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper onClick={() => { handleCounter(true) }} />
                                <NumberDecrementStepper onClick={() => { count > 1 && handleCounter() }} />
                            </NumberInputStepper>
                        </NumberInput>
                        <Button colorScheme="purple" onClick={() => { add(product, count) }}>
                            Add to cart
                        </Button>
                    </Stack>

                </Stack>
            </SimpleGrid>
            <Heading py={5} fontSize="4xl" fontWeight={600} color="purple.800">Products related</Heading>
            <Box w="full">
                <ProductList products={Boolean(productsRelated.length) ? productsRelated : products.slice(0, 3)} />
            </Box>
            <Flex justify={'start'} pt={6}>
                <Button colorScheme="purple" onClick={() => { navigate("/") }} variant='link'>
                    Continue shopping
                </Button>
            </Flex>
            <CartView />
        </Container>
    );
}

export default Product;

