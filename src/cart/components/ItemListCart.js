import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { useCart } from '../hooks';
import ItemCart from './ItemCart';
import { WarningIcon } from '@chakra-ui/icons'

const ItemListCart = () => {
    const { items } = useCart();

    if (!Boolean(items.length)) {
        return (
            <Flex
                maxW="sm"
                w="full"
                mx="auto"
                bg="white"
                shadow="md"
                rounded="lg"
                overflow="hidden"
            >
                <Flex justifyContent="center" alignItems="center" w={12} bg="red.500">
                    <Icon as={WarningIcon} color="white" boxSize={6} />
                </Flex>

                <Box mx={-3} py={2} px={4}>
                    <Box mx={3}>
                        <Text
                            color="red.500"
                            fontWeight="bold"
                        >
                            Error
                        </Text>
                        <Text
                            color="gray.600"
                            fontSize="sm"
                            fontWeight="bold"
                        >
                            Your cart is empty!
                        </Text>
                    </Box>
                </Box>
            </Flex>
        )
    }

    return (
        <Box>
            {items.map(({ product, count }) =>
                <ItemCart key={product.name} product={product} count={count} />
            )
            }
        </Box>
    )
}

export default ItemListCart

