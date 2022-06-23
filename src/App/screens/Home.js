import { Stack } from '@chakra-ui/react';
import Store from '../../product/screens/Store';


const HomeScreen = () => {
    return (
        <Stack direction="column" flex={1} height="100%">
            <Store />
        </Stack>
    )
}

export default HomeScreen 