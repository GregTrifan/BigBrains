import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";

const ThemeToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode} float="right">
            {colorMode === "light" ? "Go Dark 🌙" : "Go Light 🌞"}
        </Button>
    );
};

export default ThemeToggler;
