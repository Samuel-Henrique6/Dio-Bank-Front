import { useState } from "react";
import { Box, Center } from "@chakra-ui/react";
import Card from "../components/Card";
import ButtonChakra from "../components/ButtonChakra";
import { login } from "../services/login";

export const LoginPage = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Box minHeight="100vh" bg="#9413dc" pt="15vw">
      <Center>
        <Box bg="#fff" w="100%" maxW="600px" borderRadius="10px" p="10px">
          <Card value={input} onChange={handleInputChange} isError={isError} />
          <ButtonChakra
            onClick={login}
            color={"teal"}
            size={"sm"}
            mt={"10px"}
            w={"100%"}
            value={"Entrar"}
          />
        </Box>
      </Center>
    </Box>
  );
};

