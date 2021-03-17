import { Box, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
const Home = () => {
    return (
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, rotateY: 360 }}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                type: "spring",
            }}
        >
            <Box padding="1" fontSize="large" textAlign="center">
                <Text fontSize="4xl">Welcome Home!</Text>
            </Box>
        </motion.div>
    );
};
export default Home;
