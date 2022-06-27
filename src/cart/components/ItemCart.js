import { Box, Button, Flex, Heading, Image, Stack, Text, HStack, Input, Avatar } from '@chakra-ui/react'

import {
    useNumberInput,

} from '@chakra-ui/react'
import { useCart } from '../hooks'
import { CloseIcon } from '@chakra-ui/icons'


const ItemCart = ({ product, count }) => {

    const {
        price,
        name,
        image,
        author,
        id
    } = product;

    const { increase, decrease, remove } = useCart()
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput(
        {
            defaultValue: count,
            min: 0
        })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()


    return (
        <Stack direction="row" spacing={4} paddingBottom={9} width="100%">
            <Avatar size='2xl' src={image || 'https://via.placeholder.com/150'} />
            <Box paddingLeft={3} paddingRight={6}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" cursor="pointer">
                    <Heading fontSize="md">{name || "No mane"}</Heading>
                    <CloseIcon fontSize="md" onClick={() => { remove(id) }} />
                </Stack>
                <Flex >by <Text paddingLeft={2} color="purple.300">{author || 'Vicent'}</Text></Flex>
                <Stack direction="row" marginTop={4} justifyContent="space-between">
                    <Box fontWeight="500"><Text display="inline" color="purple">{count}x</Text>{price || 0}</Box>
                    <Box fontWeight="500">${(count * price).toLocaleString('ar-AR')}</Box>
                </Stack>
                <HStack paddingTop={4}>
                    <Button {...dec} disabled={count <= 0} onClick={() => { if (count > 0) { decrease(id) } }}>-</Button>
                    <Input {...input} />
                    <Button {...inc} onClick={() => { increase(id) }}>+</Button>
                </HStack>
            </Box>
        </Stack>
    )
}

export default ItemCart