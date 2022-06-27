import {
    Stack,
    Flex,
    Text,
    Box,
    Heading,
    Image,
} from '@chakra-ui/react';

const Hero = () => {

    return (
        <Box>
            <Flex
                width="full"
                height="350px"
                borderBottomRadius={6}
                backgroundImage={
                    'url(https://i0.wp.com/arteyalgomas.com/wp-content/uploads/2020/01/Van_Gogh.-Campo-de-trigo-con-cuervos.-1890.jpg?resize=1140%2C713&ssl=1)'
                }
                backgroundSize="cover"
                backgroundPosition="center center"
            >
                <Stack
                    direction="column"
                    width="full"
                    borderRadius={6}
                    justifyContent={'center'}
                    align="center"
                    paddingX={1}
                    bgGradient={'linear(to-r, blackAlpha.600,  blackAlpha.50)'}>
                    <Flex mt="-20px" align="center" justifyContent="center">
                        <Image
                            borderRadius='full'
                            boxSize='150px'
                            fallbackSrc='https://via.placeholder.com/150'
                            alt='Dan Abramov'
                        />
                    </Flex>
                    <Heading
                        color="white"
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize="3xl"

                    >
                        Store
                    </Heading>
                    <Text
                        maxW="2xl"
                        color="white"
                        align="center"
                        fontWeight={600}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua

                    </Text>
                </Stack>
            </Flex>

        </Box >

    );
}

export default Hero;