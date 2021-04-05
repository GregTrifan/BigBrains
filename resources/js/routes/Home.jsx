import { Img, Center, Text} from "@chakra-ui/react";
import "@fontsource/varela"

const Home = () => {
    return (
        <div>
            {/* Header */}
            <Center>
            <Text textAlign={"center"} fontSize="4xl" fontWeight="1000" fontFamily="varela">Noua <font color="teal">generatie</font> de online learning</Text>
            </Center>
            <Center>
                <Img alt="svg"  width={{sm: "50%", xl: "30%"}}  src="./svgs/undraw_Reading_re_29f8.svg"/>
            </Center>
            <Center>
                <Text textAlign={"center"} paddingTop="90px" fontSize="2xl" fontWeight="100" fontFamily="varela">Big Brain este noua platforma online unde poti invata lucuri noi si iti poti testa <font color="teal">cunostintele</font></Text>
            </Center>






        </div>
    );
};
export default Home;
