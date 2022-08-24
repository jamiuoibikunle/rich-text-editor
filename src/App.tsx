import {
    Box,
    Flex,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Select,
    Textarea,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import EditorComponent from "./components/Editor";

const App = () => {
    const [slug, setSlug] = useState("");

    const handleSlug = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.toLowerCase().replaceAll(" ", "-");
        setSlug(e.target.value);
    };

    return (
        <Box w={{ base: "90%", lg: "80%" }} p="2rem 0" m="auto">
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type="text" />
                <FormHelperText>Required</FormHelperText>
            </FormControl>
            <Flex gap={5}>
                <FormControl my={7} flex={3}>
                    <FormLabel>Slug</FormLabel>
                    <Input type="text" value={slug} onChange={handleSlug} />
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <FormControl my={7} flex={2}>
                    <FormLabel>Category</FormLabel>
                    <Select placeholder="Select category">
                        <option>Technology</option>
                    </Select>
                </FormControl>
            </Flex>
            <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea resize="none" />
                <FormHelperText>
                    Required. Keep it as short as possible
                </FormHelperText>
            </FormControl>
            <FormControl py={7}>
                <FormLabel>Content</FormLabel>
                <EditorComponent />
            </FormControl>
        </Box>
    );
};

export default App;
