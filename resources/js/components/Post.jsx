import React from 'react'
import { Box, Image, Text, Center } from "@chakra-ui/react"

const Post = () => {
    return (
        <div>
            <Center paddingTop="40px">
            <Box width="60%" borderWidth="1px" borderRadius="lg" overflow="hidden">
                <Text padding="10px" fontWeight="extrabold">Username</Text>
                <Text padding="10px">Test pentru Evaluarea Nationala clasa a VIII-a</Text>
                <Center paddingBottom="20px">
                <Image padding="10px" width="60%" src="book.jpg"></Image>
                </Center>
            </Box>
            </Center>
        </div>
    )
}

export default Post;
