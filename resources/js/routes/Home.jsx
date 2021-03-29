import { Img, Center,Box, Text, Stack, Heading} from "@chakra-ui/react"
import {FaBook, FaRegMoneyBillAlt, FaClock} from "react-icons/fa";

const Home = () => {
    return (
        <div>
            {/* Header */}
            <Center>
            <Text textAlign={"center"} fontSize="4xl" fontWeight="extrabold">Noua <font color="teal">generatie</font> de online learning</Text>
            </Center>
            <Center>
                <Img alt="svg"  width={{sm: "50%"}}  src="hero.svg"/>
            </Center>
            <hr />
            <Center>
            <Text paddingTop="30px" textAlign={"center"} fontSize="4xl" fontWeight="extrabold">De ce <font color="teal">noi</font> ?</Text>
            </Center>

            {/* cards */}
            <Center>
            <Stack paddingTop="100px" direction={["column", "row"]} spacing="150px">
            <Box>
                <Heading>
                <Center>
                <FaRegMoneyBillAlt fontSize="70px"/>
                </Center>
                <Text textAlign="center" fontSize="3xl" fontWeight="extrabold">Fara <font color="teal">costuri</font></Text>
                </Heading>
            </Box>
            <Box>
                <Heading>
                <Center>
                <FaBook fontSize="70px"/>
                </Center>
                <Text textAlign="center" fontSize="3xl" fontWeight="extrabold">Zeci de <font color="teal">resurse</font></Text>
                </Heading>
            </Box>
            <Box>
                <Heading>
                <Center>
                <FaClock fontSize="70px"/>
                </Center>
                <Text textAlign="center" fontSize="3xl" fontWeight="extrabold">Usor de <font color="teal">folosit</font></Text>
                </Heading>
            </Box>
            </Stack>
            </Center>

        </div>
    );
};
export default Home;
