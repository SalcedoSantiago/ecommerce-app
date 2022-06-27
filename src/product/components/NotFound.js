import { SearchIcon } from '@chakra-ui/icons'
import { Box, Text, Stack } from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Box minH={'350px'} >
            <Stack direction="row" justify={'center'} align='center' h="full">
                <Box>
                    <SearchIcon
                        fontSize={'5xl'}
                        textAlign="center"
                        display={'flex'}
                        justifyContent="center"
                        marginX="auto"
                        color="gray.500"
                    />
                    <Text
                        color="gray.500"
                        paddingY={3}
                        fontWeight="600"
                        fontSize="xl"
                    >
                        Not found
                    </Text>
                </Box>
            </Stack>
        </Box>
    )
}

export default NotFound;