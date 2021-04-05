import { useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Center, Heading } from "@chakra-ui/layout";
import React, { useState } from "react";

const Login = () => {
    const cardBg = useColorModeValue("teal.100","teal.600")
    return (
        <>
            <Center>
                <Box bg={cardBg} borderRadius={30} padding={30}>
                    <Heading marginBottom="2">Login</Heading>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email"
                        placeholder="Enter email"/>
                    </FormControl>

                    <FormControl id="password" marginTop={30}>
                        <FormLabel>Password</FormLabel>
                        <Input
                        pr="4.5rem"
                        type="password"
                        placeholder="Enter password"
                    />
                    </FormControl>

                </Box>
            </Center>
        </>
    )
}
export default Login;
