import { Spinner, Flex, Stack, Text, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons'
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';
import CartView from '../../cart/components/CartView'
import Hero from '../components/Hero';
import { useFilter, useProducts, useSearch } from '../hook';
import NotFound from '../components/NotFound';


const Store = () => {
    const [search, setSearch] = useSearch();
    const { productsList, total, products } = useProducts()
    const { filter, setFilter, filtersType } = useFilter();



    if (products.length <= 0) {
        return (
            <Stack pb={6}>
                <Hero />
                <Flex alignItems="center" justifyContent="center" paddingY={12}>
                    <Spinner color='red.500' />
                </Flex>
            </Stack>
        )
    }

    return (
        <Stack pb={6}>
            <Hero />
            <Stack height="100%" flex={1}>
                <Stack paddingY="5" spacing={12} >
                    <Stack direction="row" spacing={6} w="100%">
                        <Text fontWeight="500" paddingY="2" paddingX="4" display={'inline-block'} minW="100px" >
                            {productsList.length} of {total.toLocaleString('ar-Ar')}
                        </Text>
                        <InputGroup
                            alignItems="center"
                            height={10}
                            w="350px"
                            rounded='lg'
                            boxShadow={'2xl'}
                        >
                            <InputLeftElement
                                children={<SearchIcon color="gray.300" name="search" />}
                                color="gray.300"
                                fontSize="1.2em"
                                top="inherit"
                            />
                            <Input
                                fontSize="md"
                                paddingLeft={10}
                                variant="unstyled"
                                placeholder="Search..."
                                value={search}
                                onInput={({ target: { value } }) => setSearch(value)}
                            />
                        </InputGroup>
                        <Filters active={filter} filters={filtersType} setFilter={setFilter} />
                    </Stack>
                    {Boolean(productsList.length) ? <ProductList products={productsList} /> :
                        <NotFound />
                    }
                </Stack>
            </Stack >
            <CartView />
        </Stack>
    )
}

export default Store