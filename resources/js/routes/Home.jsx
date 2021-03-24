import { Img, Center,Box, Text} from "@chakra-ui/react"
const Home = () => {
    return (
        <Box >
            <Center>
            <Text fontSize={{base: "2xl", sm: "1xl", md: "3xl", lg: "4xl", xl: "5xl"}}  fontWeight="extrabold">Noua <font color="teal">generatie</font> de online learning</Text>
            </Center>
            <Center>
                <Img alt="nu e semnal la vaslui"  width="80%"  src="hero.svg"/>
            </Center>
        </Box>
    );
};
export default Home;
