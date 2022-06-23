import { Box, Heading, Text, Button } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Box textAlign="center" paddingY={10} paddingX={6}>
            <Heading
                display="inline-block"
                as="h2"
                size="2xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text">
                404
            </Heading>
            <Text fontSize="18px" marginTop={3} marginBottom={2}>
                Page Not Found
            </Text>
            <Text color="gray.500" marginBottom={6}>
                The page you're looking for does not seem to exist
            </Text>

            <Button
                colorScheme="teal"
                bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                color="white"
                variant="solid">
                Go to Home
            </Button>
        </Box>
    );
}

export default NotFound;