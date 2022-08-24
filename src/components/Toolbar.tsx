import { Flex, Image } from "@chakra-ui/react";
import h2 from "../icons/h2.svg";
import h3 from "../icons/h3.svg";
import h4 from "../icons/h4.svg";
import bold from "../icons/bold.svg";
import italic from "../icons/italic.svg";
import underline from "../icons/underline.svg";
import codeblock from "../icons/codeblock.svg";
import iframe from "../icons/iframe.svg";
import image from "../icons/image.svg";
import orderedlist from "../icons/orderedlist.svg";
import bulletedlist from "../icons/bulletedlist.svg";
import table from "../icons/table.svg";
import link from "../icons/link.svg";
import blockquote from "../icons/blockquote.svg";

interface MarkButtonProps {
    format: string;
    icon: any;
}

interface BlockButtonProps {
    format: string;
    icon: any;
}

const Toobar = ({ editor, toggleMark, toggleBlock, toggleList }: any) => {
    const MarkButton = ({ format, icon }: MarkButtonProps) => {
        return (
            <Image
                h={5}
                w={5}
                src={icon}
                onClick={() => toggleMark(editor, format)}
            />
        );
    };

    const BlockButton = ({ format, icon }: BlockButtonProps) => {
        return (
            <Image
                h={5}
                w={5}
                src={icon}
                onClick={() => toggleBlock(editor, format)}
            />
        );
    };

    const ListButton = ({ format, icon }: BlockButtonProps) => {
        return (
            <Image
                h={5}
                w={5}
                src={icon}
                onClick={() => toggleList(editor, format)}
            />
        );
    };

    const InlineButton = ({ format, icon }: BlockButtonProps) => {
        return <Image h={5} w={5} src={icon} />;
    };

    return (
        <Flex borderBottom="1px solid rgb(219, 219, 219)" py={5}>
            <Flex
                px={5}
                borderRight="1px solid rgb(219, 219, 219)"
                justifyContent="space-around"
                flex={1}
            >
                <BlockButton format="h2" icon={h2} />
                <BlockButton format="h3" icon={h3} />
                <BlockButton format="h4" icon={h4} />
            </Flex>
            <Flex
                px={5}
                borderRight="1px solid rgb(219, 219, 219)"
                justifyContent="space-around"
                flex={1}
            >
                <MarkButton format="bold" icon={bold} />
                <MarkButton format="italic" icon={italic} />
                <MarkButton format="underline" icon={underline} />
            </Flex>
            <Flex
                px={5}
                borderRight="1px solid rgb(219, 219, 219)"
                justifyContent="space-around"
                flex={1}
            >
                <InlineButton format="link" icon={link} />
                <BlockButton format="blockquote" icon={blockquote} />
                <BlockButton format="image" icon={image} />
            </Flex>
            <Flex
                px={5}
                borderRight="1px solid rgb(219, 219, 219)"
                justifyContent="space-around"
                flex={0.67}
            >
                <ListButton format="ordered" icon={orderedlist} />
                <ListButton format="unordered" icon={bulletedlist} />
            </Flex>
            <Flex px={5} justifyContent="space-around" flex={1}>
                <ListButton format="codeblock" icon={codeblock} />
                <BlockButton format="iframe" icon={iframe} />
                <BlockButton format="table" icon={table} />
            </Flex>
        </Flex>
    );
};

export default Toobar;
