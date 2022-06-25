import { useState } from 'react';
import { Spinner, Flex, Stack, Text, Input, Box, Button, Center } from '@chakra-ui/react';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import CartView from '../../cart/components/CartView'
import Hero from '../components/Hero';
import { useFilter, useProducts, useSearch } from '../hook';


const Store = () => {
    const [search, setSearch] = useSearch();
    const { productsList, total } = useProducts()
    const { filter, setFilter, filtersType } = useFilter();



    if (productsList.length <= 0) {

        return (
            <Stack py={6}>
                <Hero />
                <Box>
                    <Text fontWeight="500" paddingY={2}>Search item</Text>
                    <Input placeholder='Search' value={search} onInput={({ target: { value } }) => setSearch(value)} />
                </Box>
                <Flex alignItems="center" justifyContent="center" paddingY={12}>
                    <Spinner color='red.500' />
                </Flex>
            </Stack>
        )
    }

    return (
        <Stack py={6}>
            <Hero />
            <Stack height="100%" flex={1}>
                <Box>
                    <Text fontWeight="500" paddingY={2}>Search item</Text>
                    <Input placeholder='Searh' value={search} onInput={({ target: { value } }) => setSearch(value)} />
                </Box>
                <Stack paddingY="5" spacing={8}>
                    <Stack direction="row" spacing={6} >
                        <Text
                            fontWeight="500"
                            paddingY="2"
                            paddingX="4"
                        >
                            {productsList.length} of {total}
                        </Text>
                        <Filters active={filter} filters={filtersType} setFilter={setFilter} />
                    </Stack>
                    {Boolean(productsList.length) ? <ProductList products={productsList} /> : <Text>No results for: {search}</Text>}
                </Stack>
            </Stack >
            <CartView />
        </Stack>
    )
}

export default Store