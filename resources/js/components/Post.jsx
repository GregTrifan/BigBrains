import React from 'react'
import { Box, Text, Center, Button, useBoolean} from "@chakra-ui/react"
import { AiOutlineFire } from "react-icons/ai";
const Post = ({ question,count }) => {
    const [pressed, setPress] = useBoolean();
    return (
        <div>
            <Center paddingTop="40px">
            <Box width="60%" p={2.5} borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Text padding="10px">{question}</Text>
                    <Button variant="outline" onClick={() => setPress.toggle()} _hover={{ color: "red.300" }}
                        color={pressed ? "red" : false}
                        leftIcon={<AiOutlineFire />}>{count}</Button>
                </Box>
            </Center>
        </div>
    )
}

export default Post;
