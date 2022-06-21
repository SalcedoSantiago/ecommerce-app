import { Stack, Box } from '@chakra-ui/react';

const Filters = ({ active, filters, setFilter }) => {

    return (
        <Stack direction="row">
            {filters.map((filter) =>
                <Box
                    onClick={() => { setFilter(filter) }}
                    key={filter}
                    cursor="pointer"
                    borderRadius={9999}
                    paddingY="2"
                    paddingX="6"
                    fontWeight="500"
                    background={active == filter ? 'purple.700' : 'white'}
                    color={active == filter ? 'white' : 'primary.500'}
                >
                    {filter}
                </Box>
            )}
        </Stack>
    )
}

export default Filters