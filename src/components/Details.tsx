import {
    Box,
    Button,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Image as ChakraImage,
    Input,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Details = () => {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImage = (e: any) => {
        const data = new FormData();

        data.append("file", e.target.files[0]);
        data.append("upload_preset", "profile_photos");
        data.append("cloud_name", "alvastack");
        fetch("https://api.cloudinary.com/v1_1/alvastack/image/upload", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => setImage(data.url))
            .catch((err) => console.log(err));
    };

    const handleChange = () => {
        if (!name) {
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <Box px={5}>
            <Heading
                as="h2"
                fontSize="1.5rem"
                fontWeight="500"
                pb={4}
                borderBottom="1px solid #e5e5e5"
            >
                About You
            </Heading>
            <FormControl py={4} isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input size="lg" type="name" my={3} />
                <FormHelperText>
                    Your name appears on your Profile page, as your byline, and
                    in your responses. We recommend not changing your name
                    frequently as it can affect your SEO performance
                </FormHelperText>
            </FormControl>
            <FormControl py={4}>
                <FormLabel>Short bio</FormLabel>
                <Input size="lg" type="text" my={3} />
                <FormHelperText>
                    Your short bio appears on your Profile and next to your
                    stories. Keep it as short as possible.
                </FormHelperText>
            </FormControl>
            <FormControl py={4}>
                <FormLabel>Photo</FormLabel>
                <Flex
                    w="100%"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Box w="70%">
                        <Text as={FormHelperText}>
                            Your photo appears on your Profile page and with
                            your stories across Medium.
                        </Text>
                        <Text as={FormHelperText}>
                            Recommended size: Square, at least 1000 pixels per
                            side. File type: JPG, PNG or GIF.
                        </Text>
                    </Box>
                    <Box>
                        <label htmlFor="photopick">
                            <ChakraImage
                                src={image ? image : "/avatar.png"}
                                alt="Profile photo"
                                boxSize="75px"
                                borderRadius="100%"
                            />
                        </label>
                    </Box>
                    <Input
                        type="file"
                        id="photopick"
                        style={{ display: "none" }}
                        onChange={handleImage}
                    />
                </Flex>
                <Button
                    isLoading={loading ? true : false}
                    loadingText="Processing..."
                    variant="solid"
                    colorScheme="cyan"
                    color="white"
                    type="submit"
                    onClick={handleChange}
                    my={8}
                >
                    Submit
                </Button>
            </FormControl>
        </Box>
    );
};

export default Details;