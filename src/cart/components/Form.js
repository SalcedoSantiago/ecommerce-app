import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Stack,
    FormLabel,
    Input,
    Box,
    Button,
    Select,
} from "@chakra-ui/react";

import { useCart } from '../hooks';


const Form = () => {
    const { items, removeAll } = useCart();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!Boolean(items.length)) {
            alert('cart is empty')
            return;
        }

        removeAll();
        navigate("/order");
    }


    return (
        <form
            method="POST"
            onChange={handleChange}
            onSubmit={handleSubmit}
        >
            <Stack
                px={4}
                spacing={6}
            >
                <Stack direction="row">
                    <Box flex={1}>
                        <FormLabel
                            htmlFor="first_name"
                            fontSize="sm"
                            fontWeight="md"
                        >
                            First name
                        </FormLabel>
                        <Input
                            type="text"
                            name="first_name"
                            id="first_name"
                            autoComplete="given-name"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            rounded="md"
                            w="full"
                            required
                        />
                    </Box>
                    <Box flex={1}>
                        <FormLabel
                            htmlFor="email_address"
                            fontSize="sm"
                            fontWeight="md"
                        >
                            Email address
                        </FormLabel>
                        <Input
                            type="email"
                            name="email_address"
                            id="email_address"
                            autoComplete="email"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            rounded="md"
                            w="full"
                            required
                        />
                    </Box>
                </Stack>

                <Stack w="60%">
                    <Box>
                        <FormLabel
                            htmlFor="country"
                            fontSize="sm"
                            fontWeight="md"
                        >
                            Country / Region
                        </FormLabel>
                        <Select
                            id="country"
                            name="country"
                            autoComplete="country"
                            placeholder="Select option"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            required
                        >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>Mexico</option>
                        </Select>
                    </Box>
                </Stack>

                <Stack w="50%">
                    <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                    >
                        Street address
                    </FormLabel>
                    <Input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                        required
                    />
                </Stack>
                <Stack direction="row">
                    <Box>
                        <FormLabel
                            htmlFor="city"
                            fontSize="sm"
                            fontWeight="md"
                        >
                            City
                        </FormLabel>
                        <Input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="city"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            required
                        />
                    </Box>

                    <Box>
                        <FormLabel
                            htmlFor="state"
                            fontSize="sm"
                            fontWeight="md"


                        >
                            State / Province
                        </FormLabel>
                        <Input
                            type="text"
                            name="state"
                            id="state"
                            autoComplete="state"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            required
                        />
                    </Box>

                    <Box>
                        <FormLabel
                            htmlFor="postal_code"
                            fontSize="sm"
                            fontWeight="md"


                        >
                            ZIP / Postal
                        </FormLabel>
                        <Input
                            type="text"
                            name="postal_code"
                            id="postal_code"
                            autoComplete="postal-code"
                            mt={1}
                            focusBorderColor="brand.400"
                            shadow="sm"
                            size="sm"
                            w="full"
                            rounded="md"
                            required
                        />
                    </Box>
                </Stack>
            </Stack>
            <Box
                py={3}
                bg="gray.50"
                textAlign="right"
            >
                <Button
                    type="submit"
                    colorScheme="purple"

                >
                    Send
                </Button>
            </Box>
        </form>
    )
}

export default Form