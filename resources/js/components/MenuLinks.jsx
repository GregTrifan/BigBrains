import { Link } from "react-router-dom";
import {
    Stack,
    Box,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    Button
} from "@chakra-ui/react";
import ThemeToggler from "./ThemeToggler";

const MenuLinks = ({ isOpen, toggle }) => {
    const Links = () => (
        <>
            <Link to="/">Acasa</Link>
            <Link to="/about">Despre noi</Link>
            <Link to="/">Conectare</Link>
            <Button bg="teal" color="white" _hover={{ bg: "teal.500"}} >
            <Link to="/">Inregistreaza-te</Link>
            </Button>
            <ThemeToggler />
        </>
    );
    return (
        <>
            <Box display={{ base: "none", md: "block" }}>
                <Stack
                    spacing={8}
                    align="center"
                    justify={[
                        "center",
                        "space-between",
                        "flex-end",
                        "flex-end",
                    ]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}

                >
                    <Links />
                </Stack>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement={"right"}
                onClose={toggle}
                width="100vh"
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Menu</DrawerHeader>

                        <DrawerBody>
                            <Stack
                                spacing={8}
                                align="center"
                                justify={[
                                    "center",
                                    "space-between",
                                    "flex-end",
                                    "flex-end",
                                ]}
                                direction={["column"]}
                                pt={[4, 4, 0, 0]}
                            >
                                <Links />
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};
export default MenuLinks;
