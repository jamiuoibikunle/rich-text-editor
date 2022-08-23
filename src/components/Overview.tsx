import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

interface State {
    data: {
        value: {
            totalSamplesTested: string;
            totalConfirmedCases: string;
            totalActiveCases: string;
            discharged: string;
            death: string;
        };
    };
}

const Overview = () => {
    const data = useSelector((state: State) => state.data.value);

    return (
        <Box>
            <Center>
                <Heading as="h1" textAlign="center">
                    Coronavirus Reports in Nigeria
                </Heading>
            </Center>
            <Box w="fit-content" m="2.5rem auto">
                <Heading as="h2" fontSize="1.35rem">
                    Total Samples Tested
                </Heading>
                <Text fontSize="1.25rem" w="fit-content" m="1rem auto">
                    {data.totalSamplesTested}
                </Text>
            </Box>
            <Box w="fit-content" m="2.5rem auto">
                <Heading as="h2" fontSize="1.35rem">
                    Total Confimed Cases
                </Heading>
                <Text fontSize="1.25rem" w="fit-content" m="1rem auto">
                    {data.totalConfirmedCases}
                </Text>
            </Box>
            <Box w="fit-content" m="2.5rem auto">
                <Heading as="h2" fontSize="1.35rem">
                    Total Active Cases
                </Heading>
                <Text fontSize="1.25rem" w="fit-content" m="1rem auto">
                    {data.totalActiveCases}
                </Text>
            </Box>
            <Box w="fit-content" m="2.5rem auto" color="#10b981">
                <Heading as="h2" fontSize="1.35rem">
                    Discharged
                </Heading>
                <Text fontSize="1.25rem" w="fit-content" m="1rem auto">
                    {data.discharged}
                </Text>
            </Box>
            <Box w="fit-content" m="2.5rem auto" color="#ef4444">
                <Heading as="h2" fontSize="1.35rem">
                    Death
                </Heading>
                <Text fontSize="1.25rem" w="fit-content" m="1rem auto">
                    {data.death}
                </Text>
            </Box>
        </Box>
    );
};

export default Overview;
