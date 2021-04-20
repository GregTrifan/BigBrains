import { Input, Box, Center, Text, HStack, Button, Link  } from "@chakra-ui/react"
import { FaCamera, FaPaperclip } from "react-icons/fa";
import React from 'react';
import Post from "../components/Post";
import Skele from "../components/Skele";

const Feed = () => {
    return (
        <div>
        <Center>
            <Box width="60%" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Input placeholder="Postează o resursă"></Input>
            <HStack padding="10px" spacing="20px">
                <Link _hover={{ color: "teal" }}><FaCamera fontSize="30px" /></Link>
                <Link _hover={{ color: "teal" }}><FaPaperclip fontSize="30px" /></Link>
                <Button _hover={{ bg: "teal.500" }}>Postează</Button>
            </HStack>
            </Box>
        </Center>
            <Post/>
            <Skele/>
        </div>
    )
}

export default Feed
