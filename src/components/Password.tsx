import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

type E = {
    target: {
        value: string;
    };
};

const Password = () => {
    const [isPassError, setIsPassError] = useState("");
    const [show, setShow] = useState(false);
    const [currPass, setCurrPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [passLoading, setPassLoading] = useState(false);

    const handleShowPassword = () => {
        setShow(!show);
    };

    const handlePassword = () => {
        if (!currPass || !newPass || !confirmPass) {
            setIsPassError("Kindly fill all the required fields");
            setTimeout(() => {
                setIsPassError("");
            }, 2500);
            return;
        } else if (newPass !== confirmPass) {
            setIsPassError("New password and confirm password do not match");
            setTimeout(() => {
                setIsPassError("");
            }, 2500);
            return;
        }

        setPassLoading(true);
        setTimeout(() => {
            setPassLoading(false);
        }, 3000);
    };

    const passwords = [
        {
            name: "Current Password",
            placeholder: "Enter current password",
            handler: setCurrPass,
            value: currPass,
        },
        {
            name: "New Password",
            placeholder: "Enter new password",
            handler: setNewPass,
            value: newPass,
        },
        {
            name: "Confirm Password",
            placeholder: "Enter new password again",
            handler: setConfirmPass,
            value: confirmPass,
        },
    ];

    return (
        <Box>
            <Heading as="h2" fontSize="1.5rem" fontWeight="500" pb={2}>
                Security
            </Heading>
            <FormControl>
                {passwords.map((pass, index) => {
                    const handleChange = (e: E) => {
                        pass.handler(e.target.value);
                    };

                    return (
                        <FormControl py={3} key={index} isRequired>
                            <FormLabel py={3}>{pass.name}</FormLabel>
                            <InputGroup size="lg">
                                <Input
                                    pr="4.5rem"
                                    type={show ? "text" : "password"}
                                    placeholder={pass.placeholder}
                                    onChange={handleChange}
                                />
                                <InputRightElement w="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleShowPassword}
                                    >
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    );
                })}
                {isPassError.length !== 0 && (
                    <Center color="#ef4444" py={3}>
                        {isPassError}
                    </Center>
                )}
                <Button
                    isLoading={passLoading ? true : false}
                    loadingText="Processing..."
                    variant="solid"
                    colorScheme="cyan"
                    color="white"
                    type="submit"
                    onClick={handlePassword}
                    my={8}
                >
                    Submit
                </Button>
            </FormControl>
        </Box>
    );
};

export default Password;
