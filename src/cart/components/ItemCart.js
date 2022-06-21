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
            min: 1
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <Stack direction="row" spacing={4}>
            <Avatar size='2xl' src={product.image} />
            <Box paddingY={2} >
                <Heading fontSize="md">{product.name}</Heading>
                <Flex >by <Text paddingLeft={3} color="purple.300">{product.author}</Text></Flex>
                <Stack direction="row" marginTop={4}>
                    <Box fontWeight="500">{count}x {product.price}</Box>
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