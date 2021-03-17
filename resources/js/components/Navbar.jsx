import React from "react";
import { Text, Flex } from "@chakra-ui/layout";
import MenuToggle from "./MenuToggle";
import MenuLinks from "./MenuLinks";
import { useColorModeValue } from "@chakra-ui/color-mode";
const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Flex
            as="nav"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            color="teal.400"
            bg={useColorModeValue("gray.200", "#0A0D12")}
        >
            <Text
                fontSize="3xl"
                bgClip="text"
                bgGradient={useColorModeValue(
                    "linear(to-l, blue.500, teal.400)",
                    "linear(to-l,blue.300, teal.500)"
                )}
            >
                BigBrain
            </Text>
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} toggle={toggle} />
        </Flex>
    );
};

export default Navbar;
