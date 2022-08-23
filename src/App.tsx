import { Box, Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import List from "./components/List";
import Overview from "./components/Overview";
import { external } from "./features/data";

export const App = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://covidnigeria.herokuapp.com/api")
                .then((res) => res.json())
                .then(({ data }) => {
                    dispatch(external(data));
                })
                .catch(() =>
                    alert(
                        "There was an error getting the data from the server. Please visit back shortly."
                    )
                )
                .finally(() => {
                    setLoading(false);
                });
        };
        fetchData();
    }, [dispatch]);

    return !loading ? (
        <ChakraProvider>
            <Box w="90%" m="2rem auto">
                <Overview />
                <List />
            </Box>
        </ChakraProvider>
    ) : (
        <ChakraProvider>
            <Center m="auto" h="100vh">
                <Spinner color="#0ea5e9" />
            </Center>
        </ChakraProvider>
    );
};
