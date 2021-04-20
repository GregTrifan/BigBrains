import { Text, Center } from "@chakra-ui/layout";
import { Avatar, Wrap, WrapItem, Stack } from "@chakra-ui/react"
import "@fontsource/cairo"

const About = () => {
    return (
    <div>
        <Center>
        <Text textAlign={"center"} fontSize="4xl" fontWeight="1000" fontFamily="cairo">Împreună reușim</Text>
        </Center>
        <Center paddingTop="50px">
            <Text textAlign={"center"} fontSize="2xl" fontWeight="100" fontFamily="cairo">Cine suntem?</Text>
        </Center>

        <Center paddingTop="25px">
        <Wrap spacing="50px">
            <WrapItem>
                <Stack>
                <Avatar name="Lucian" src="" />
                <Text textAlign={"center"}>Lucian</Text>
                </Stack>
            </WrapItem>
            <WrapItem>
                <Stack>
                <Avatar name="Greg" src="" />
                <Text textAlign={"center"}>Greg</Text>
                </Stack>
            </WrapItem>
            <WrapItem>
                <Stack>
                <Avatar name="Nikolas" src="" />
                <Text textAlign={"center"}>Nikolas</Text>
                </Stack>
            </WrapItem>
        </Wrap>
        </Center>
    </div>
    );
};
export default About;
