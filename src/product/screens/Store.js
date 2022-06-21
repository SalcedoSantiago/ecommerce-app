import { useEffect, useState, useMemo } from 'react';
import { Spinner, Flex, Stack, Text, Input, Box, Button } from '@chakra-ui/react';
import { data } from '../api';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import CartView from '../../cart/components/CartView'
import { useCart, useModalCart, useCartCoutItems } from '../../cart/hooks';

const FILTERS = [
    'low',
    'high',
    'default'
]

const Store = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('low');
    const [search, setSearch] = useState('');
    const { isModalOpen, toggleModal } = useModalCart()
    const { items } = useCart()

    const countItems = useCartCoutItems();


    const productsList = useMemo(() => {
        const productFilter = search && products.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())) || products;
        switch (filter) {
            case 'low':
                return [...productFilter].sort((a, b) => a.price - b.price);
            case 'high':
                return [...productFilter].sort((a, b) => b.price - a.price);
            case 'default':
            default:
                return productFilter;
        }
    }, [products, filter, search])

    useEffect(() => {
        setTimeout(() => {
            setProducts(data)
        }, 500)
    }, [])


    const handdleSubmit = () => {
        console.log('submit');
    }


    if (products.length <= 0) {
        return (
            <Stack>
                <Box>
                    <Text align="center" fontWeight="500" paddingY={2}>Search item</Text>
                    <Input placeholder='Searh' value={search} onInput={({ target: { value } }) => setSearch(value)} />
                </Box>
                <Flex alignItems="center" justifyContent="center" paddingY={12}>
                    <Spinner color='red.500' />
                </Flex>
            </Stack>

        )
    }

    return (
        <Stack>
            <Box>
                <Text align="center" fontWeight="500" paddingY={2}>Search item</Text>
                <Input placeholder='Searh' value={search} onInput={({ target: { value } }) => setSearch(value)} />
            </Box>
            <Stack paddingY="5" spacing={8}>
                <Stack direction="row" spacing={6} >
                    <Text
                        fontWeight="500"
                        paddingY="2"
                        paddingX="4"
                    >
                        {productsList.length} of {products.length}
                    </Text>
                    <Filters active={filter} filters={FILTERS} setFilter={setFilter} />
                </Stack>
                {Boolean(productsList.length) ? <ProductList products={productsList} /> : <Text>No results for: {search}</Text>}
            </Stack>
            <Stack align="center" position="sticky" bottom={0} marginBottom="5" paddingY={3}>
                <Button onClick={() => { toggleModal(true) }}>
                    <Text>ver carrito {countItems} items</Text>
                </Button>
            </Stack>
            {isModalOpen &&
                <CartView
                    isOpen
                    onSubmit={handdleSubmit}
                />
            }

        </Stack >
    )
}

export default Store