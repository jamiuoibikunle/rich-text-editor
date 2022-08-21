import { Box, Flex } from "@chakra-ui/react";
import Details from "./Details";
import Password from "./Password";

const Main = () => {
    return (
        <Flex
            w={{ base: "100%", lg: "75rem" }}
            m="2.5rem auto"
            wrap="wrap"
            justifyContent="space-between"
            rowGap={10}
        >
            <Box w="100%" maxW="40rem" m={{ base: "auto", lg: "0" }}>
                <Details />
            </Box>
            <Box w="100%" maxW="lg" px={5} m={{ base: "auto", lg: "0" }}>
                <Password />
            </Box>
        </Flex>
    );
};

export default Main;
