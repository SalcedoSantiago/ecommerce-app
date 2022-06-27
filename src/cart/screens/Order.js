import { Box, Button, Center, Heading, Link, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";

const Order = () => {
    const navigate = useNavigate();

    return (
        <Box position="relative">
            <Button
                position="absolute"
                paddingY={6}
                top={0}
                left={0}
                onClick={() => { navigate("/") }}
                variant='link'
                colorScheme="purple"
                >
                Continue shopping
            </Button>
            <Center height="80vh">

                <Box textAlign="center" py={10} px={6}>
                    <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                    <Heading as="h2" size="xl" mt={6} mb={2}>
                        Order complete!!
                    </Heading>
                    <Text color={'gray.500'}>
                        thanks for biling!
                    </Text>
                </Box>
            </Center>
        </Box>
    );
}


export default Order;