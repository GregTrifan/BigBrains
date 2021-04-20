import { Input, Box, Center, Text, HStack, Button, Link, FormControl,useToast  } from "@chakra-ui/react"
import { FaCamera, FaPaperclip } from "react-icons/fa";
import React, { useState } from 'react';
import Post from "../components/Post";
import Skele from "../components/Skele";
import InfiniteScroll from 'react-infinite-scroller';
import apiClient from "../services/apiClient";
import userPost from "../utils/userPost";

const Feed = () => {
    const toast = useToast();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Sent, setSent] = useState(false);
    const [question, setQuestion] = useState("");
    const addPost = async e => {
        e.preventDefault();
        setSent(true);
        try {
            const result = await userPost(question);
            if (result === "Error") {
            toast({
                title: "Cateva erori interne, incearca mai tarziu",
                status: "error",
                isClosable: true,
            });
            setSent(false);
        }
        if (result === "Success") {
            toast({
                title: `Actualizat cu succes`,
                status: "success",
                isClosable: true
            })
            setSent(false);
            window.location.reload();
        }
        }
        catch {
            toast({
                title: "Cateva erori interne, incearca mai tarziu",
                status: "error",
                isClosable: true,
            });
            setSent(false);
        }
    }
    const loadPosts = (count) => {
        apiClient.get(`/api/posts?page=${count}`)
            .then(res => res.data)
            .then(sol => { if(sol.current_page===sol.last_page)setLoading(false); return sol.data })
            .then(data => setPosts([...data,...posts]));

    };
    var items = [];
    posts.map((post, i) => {
        items.push(
            <div key={i}>
                <Post question={post.title}  count={post.votes}/>
            </div>
        )
    })
    return (
        <div>
            <Center>
                <form onSubmit={addPost}>
                <Box width="80 %" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <FormControl>
                            <Input isRequired placeholder="Postează o intrebare" onChange={e => setQuestion(e.currentTarget.value)} />
                    </FormControl>
                        <HStack padding="10px" spacing="20px">
                            <Button _hover={{ bg: "teal.500" }} type="submit" isLoading={Sent}>Postează</Button>
                        </HStack>

                    </Box>
                    </form>
        </Center>

            <InfiniteScroll
            pageStart={0}
            loadMore={loadPosts.bind(this)}
            initialLoad={true}
            hasMore={loading}
            loader={<Skele/>}
            >
                    {items}
            </InfiniteScroll>
        </div>
    )
}

export default Feed
