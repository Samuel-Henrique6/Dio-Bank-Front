import { Box, Text, useColorModeValue } from "@chakra-ui/react";

interface ICardInfo {
  title: string;
  content: string;
}

const CardInfo = ({ title, content }: ICardInfo) => {
  return (
    <Box
      bg={useColorModeValue("#fff", "gray.900")}
      w={320}
      maxWidth={"100%"}
      minHeight={"120px"}
      p={8}
      borderRadius={"20px"}
    >
      <Text fontSize={"2xl"} fontWeight={900}>
        {title}
      </Text>
      <Text fontSize={"xl"}>{content}</Text>
    </Box>
  );
};

export default CardInfo;
