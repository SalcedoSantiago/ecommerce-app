import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
} from '@chakra-ui/react';

const Hero = () => {

    return (
        <Flex
            width="full"
            height="300px"
            backgroundImage={
                'url(https://i0.wp.com/arteyalgomas.com/wp-content/uploads/2020/01/Van_Gogh.-Campo-de-trigo-con-cuervos.-1890.jpg?resize=1140%2C713&ssl=1)'
            }
            backgroundSize="cover"
            backgroundPosition="center center"
            borderRadius={6}
        >
            <VStack
                width="full"
                borderRadius={6}
                justifyContent={'center'}
                paddingX={4}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW="2xl" alignItems="flex-start" spacing={6}>
                    <Text
                        color="white"
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize="3xl">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    );
}

export default Hero;