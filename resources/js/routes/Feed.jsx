import { Input, Box, Center, Text, HStack  } from "@chakra-ui/react"
import { FaCamera } from "react-icons/fa";
import React from 'react'

const Feed = () => {
    return (
        <div>
        <Center>
            <Box width="70%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Input placeholder="Posteaza o resursa"></Input>
            <HStack paddingTop="20px" spacing="10px">
                <Box borderWidth="1px" borderRadius="lg">
                <FaCamera fontSize="30px" />
                </Box>
            </HStack>
            </Box>
        </Center>
        </div>
    )
}

export default Feed
