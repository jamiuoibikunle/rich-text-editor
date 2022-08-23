import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

interface State {
    data: {
        value: {};
    };
}

type Data = {
    states?: {
        _id: string;
        state: string;
        confirmedCases: string;
        casesOnAdmission: string;
        discharged: string;
        death: string;
    }[];
};

const List = () => {
    const data: Data = useSelector((state: State) => state.data.value);
    return (
        <Box overflow="hidden">
            <Heading as="h2" fontSize="1.25rem" fontWeight="500">
                Reported Cases By States in Nigeria
            </Heading>
            <Box
                overflowX="auto"
                my={10}
                border="1px solid #d4d4d4"
                borderRadius={5}
            >
                <Flex
                    w="70rem"
                    m="auto"
                    py={5}
                    justifyContent="space-between"
                    fontWeight="500"
                    fontSize="1.2rem"
                >
                    <Text width="20%" textAlign="center">
                        State
                    </Text>
                    <Text width="20%" textAlign="center">
                        Confirmed Cases
                    </Text>
                    <Text width="20%" textAlign="center">
                        Cases on Admission
                    </Text>
                    <Text width="20%" textAlign="center">
                        Discharged
                    </Text>
                    <Text width="20%" textAlign="center">
                        Death
                    </Text>
                </Flex>
                {data.states !== undefined &&
                    data.states.map(
                        ({
                            _id,
                            state,
                            confirmedCases,
                            casesOnAdmission,
                            discharged,
                            death,
                        }) => {
                            return (
                                <Flex
                                    w="70rem"
                                    m="auto"
                                    py={5}
                                    justifyContent="space-between"
                                    key={_id}
                                >
                                    <Text width="20%" textAlign="center">
                                        {state}
                                    </Text>
                                    <Text width="20%" textAlign="center">
                                        {confirmedCases}
                                    </Text>
                                    <Text width="20%" textAlign="center">
                                        {casesOnAdmission}
                                    </Text>
                                    <Text width="20%" textAlign="center">
                                        {discharged}
                                    </Text>
                                    <Text width="20%" textAlign="center">
                                        {death}
                                    </Text>
                                </Flex>
                            );
                        }
                    )}
            </Box>
        </Box>
    );
};

export default List;
