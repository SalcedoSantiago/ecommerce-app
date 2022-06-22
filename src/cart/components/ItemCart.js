import { Box, Button, Flex, Heading, Image, Stack, Text, HStack, Input, Avatar } from '@chakra-ui/react'

import {
    useNumberInput
} from '@chakra-ui/react'
import { useCart } from '../hooks'


const ItemCart = ({ product, count }) => {

    const { increase, decrease } = useCart()
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput(
        {
            defaultValue: count,
            min: -1
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <Stack direction="row" spacing={4} paddingBottom={9} width="100%">
            <Avatar size='2xl' src={product.image} />
            <Box paddingLeft={3} paddingRight={6}>
                <Heading fontSize="md">{product.name}</Heading>
                <Flex >by <Text paddingLeft={2} color="purple.300">{product.author}</Text></Flex>
                <Stack direction="row" marginTop={4} justifyContent="space-between">
                    <Box fontWeight="500">{count}x {product.price}</Box>
                    <Box fontWeight="500">${count * product.price}</Box>
                </Stack>
                <HStack paddingTop={2}>
                    <Button {...inc} on={() => { increase(product.id) }}>+</Button>
                    <Input {...input} />
                    <Button {...dec} onClick={() => { decrease(product.id) }}>-</Button>
                </HStack>
            </Box>
        </Stack>
    )
}

export default ItemCart