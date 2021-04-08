import { Img, Center, Text, Stack} from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import "@fontsource/cairo"

const Home = () => {
    return (
        <div>
            <Center>
            <Text textAlign={"center"} fontSize="4xl" fontWeight="1000" fontFamily="cairo">Noua <font color="teal">generatie</font> de online learning</Text>
            </Center>
            <Center>
                <Img alt="svg"  width={{sm: "50%", xl: "29%"}}  src="./svgs/undraw_Reading_re_29f8.svg"/>
            </Center>
            <Center>
                <Text textAlign={"center"} paddingTop="90px" fontSize="3xl" fontWeight="100" fontFamily="cairo">"Ajutandu-i pe <font color="teal">altii</font>, te ajuti pe <font color="teal">tine</font>"</Text>
            </Center>
            <Center>
                <Img paddingTop="90px" alt="svg" width={{sm: "50%", xl: "29%"}} src="./svgs/undraw_Select_option_re_u4qn.svg" />
            </Center>
            <Center paddingTop="90px">
                <GoVerified fontSize="40px"color="teal"/>
            </Center>
            <Center padding="30px">
                <Text textAlign={"center"} fontSize="3xl" fontWeight="1000" fontFamily="cairo">Patrunde intr-o <font color="teal">lume</font> unde tu esti profesorul dar si elevul.</Text>
            </Center>
            <Center>
            <Text textAlign={"center"} fontSize="2xl" fontWeight="100" fontFamily="cairo"></Text>
            </Center>
            <Center>
                <Img paddingTop="90px" alt="svg" width={{sm: "50%", xl: "29%"}} src="./svgs/undraw_Growing_re_olpi.svg" />
            </Center>


        </div>
    );
};
export default Home;
