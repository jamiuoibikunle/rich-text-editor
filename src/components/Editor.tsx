import styles from "./main.module.css";

import { Box } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";
import Toobar from "./Toolbar";

import { Editable, withReact, Slate, ReactEditor } from "slate-react";
import {
    Editor,
    Transforms,
    createEditor,
    Descendant,
    Element as SlateElement,
    BaseEditor,
} from "slate";

const initialValue = [
    {
        type: "paragraph",
        children: [{ text: "" }],
    },
];

type CustomElement = CustomText & {
    children: CustomText[];
};

type CustomText = {
    type:
        | "paragraph"
        | "code"
        | "h2"
        | "h3"
        | "h4"
        | "ordered"
        | "unordered"
        | "listitems"
        | "codeblock"
        | "precode";
    bold?: boolean | null;
    italic?: boolean | null;
    strike?: boolean | null;
    underline?: boolean | null;
};

interface CustomBaseEditor extends BaseEditor {
    text?: string;
}

declare module "slate" {
    interface CustomTypes {
        Editor: CustomBaseEditor & ReactEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}

const EditorComponent = () => {
    const renderElement = useCallback(
        (props: any) => <Element {...props} />,
        []
    );
    const renderLeaf = useCallback((props: any) => <Leaf {...props} />, []);
    const [editor] = useState(() => withReact(createEditor()));

    const toggleMark = (editor: any, format: any) => {
        const isActive = isMarkActive(editor, format);

        if (isActive) {
            Editor.removeMark(editor, format);
        } else {
            Editor.addMark(editor, format, true);
        }
    };

    const isMarkActive = (editor: any, format: any) => {
        const marks: any = Editor.marks(editor);
        return marks ? marks[format] === true : false;
    };

    const toggleBlock = (editor: any, format: any) => {
        const isActive = isBlockActive(editor, format);

        Transforms.unwrapNodes(editor, {
            match: (n) =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                (n.type === "ordered" ||
                    n.type === "unordered" ||
                    n.type === "codeblock"),
            split: true,
        });

        let newProperties: Partial<SlateElement>;
        newProperties = {
            type: isActive ? "paragraph" : format,
        };

        Transforms.setNodes<SlateElement>(editor, newProperties);
    };

    const isBlockActive = (editor: any, format: any) => {
        const { selection } = editor;
        if (!selection) return false;

        const [match] = Array.from(
            Editor.nodes(editor, {
                at: Editor.unhangRange(editor, selection),
                match: (n) =>
                    !Editor.isEditor(n) &&
                    SlateElement.isElement(n) &&
                    n.type === format,
            })
        );

        return !!match;
    };

    const toggleList = (editor: any, format: any) => {
        const isActive = isListActive(editor, format);

        Transforms.unwrapNodes(editor, {
            match: (n) =>
                !Editor.isEditor(n) &&
                SlateElement.isElement(n) &&
                (n.type === "ordered" ||
                    n.type === "unordered" ||
                    n.type === "codeblock"),
            split: true,
        });

        let newProperties: Partial<SlateElement>;

        if (format !== "codeblock") {
            newProperties = {
                type: isActive ? "paragraph" : "listitems",
            };
        } else {
            newProperties = {
                type: isActive ? "paragraph" : "precode",
            };
        }
        if (!isActive) {
            const block = { type: format, children: [] };
            Transforms.wrapNodes(editor, block);
        }

        Transforms.setNodes<SlateElement>(editor, newProperties);
    };

    const isListActive = (editor: any, format: any) => {
        const { selection } = editor;
        if (!selection) return false;

        const [match] = Array.from(
            Editor.nodes(editor, {
                at: Editor.unhangRange(editor, selection),
                match: (n) =>
                    !Editor.isEditor(n) &&
                    SlateElement.isElement(n) &&
                    n.type === format,
            })
        );

        return !!match;
    };

    return (
        <Box border="1px solid rgb(219, 219, 219)">
            <Slate
                editor={editor}
                value={initialValue as Descendant[]}
                onChange={(value) => {
                    console.log(value);
                }}
            >
                <Toobar
                    editor={editor}
                    toggleMark={toggleMark}
                    toggleBlock={toggleBlock}
                    toggleList={toggleList}
                />
                <Box p={{ base: "1rem", lg: ".8rem 2rem" }} minH="30rem">
                    <Editable
                        className={styles.editable}
                        renderElement={renderElement}
                        renderLeaf={renderLeaf}
                        placeholder="Enter text"
                    />
                </Box>
            </Slate>
        </Box>
    );
};

const Element = ({ attributes, children, element }: any) => {
    switch (element.type) {
        case "h2":
            return <h2 {...attributes}>{children}</h2>;

        case "h3":
            return <h3 {...attributes}>{children}</h3>;

        case "h4":
            return <h4 {...attributes}>{children}</h4>;

        case "blockquote":
            return <blockquote {...attributes}>{children}</blockquote>;

        case "codeblock":
            return <pre {...attributes}>{children}</pre>;

        case "precode":
            return <code {...attributes}>{children}</code>;

        case "ordered":
            return <ol {...attributes}>{children}</ol>;

        case "unordered":
            return <ul {...attributes}>{children}</ul>;

        case "listitems":
            return <li {...attributes}>{children}</li>;

        default:
            return <p {...attributes}>{children}</p>;
    }
};

const Leaf = ({ attributes, children, leaf }: any) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }
    if (leaf.italic) {
        children = <em>{children}</em>;
    }
    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    if (leaf.inlinecode) {
        children = <code>{children}</code>;
    }

    return <span {...attributes}>{children}</span>;
};

export default EditorComponent;