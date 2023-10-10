import { useContext, useEffect, useState } from "react";
import { Box, Center, Container, useColorModeValue } from "@chakra-ui/react";
import ButtonChakra from "../components/ButtonChakra";
import { login } from "../services/login";
import DInput from "../components/DInput";
import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { changeLocalStorage } from "../services/storage";

interface Dados {
  email: string;
  password: string;
  name: string;
  id: string;
}

export const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [dados, setDados] = useState<null | Dados>();
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const validadeUser = async (email: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert("Dados inválido!");
    }
    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate(`/conta/${dados?.id}`);
  };

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";
  useEffect(() => {
    const getData = async () => {
      const data: any | Dados = await api;
      setDados(data);
    };

    getData();
  }, []);

  return (
    <Container maxWidth={"1100px"} flex={"1 0 auto"}>
      <Center>
        <Box
          bg={useColorModeValue("#fff", "gray.900")}
          w="100%"
          maxW="600px"
          borderRadius="10px"
          p="10px"
        >
          {!dados ? <h1>Loading...</h1> : <h1>Loaded</h1>}
          <Center>
            <h1>Login</h1>
          </Center>
          <DInput
            name={"Email"}
            type={"email"}
            placeholder={"Email"}
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            isError={isErrorEmail}
          />
          <DInput
            name={"Password"}
            type={"password"}
            placeholder={"Password"}
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
            isError={isErrorPassword}
          />
          <ButtonChakra
            onClick={() => validadeUser(email)}
            color={"teal"}
            size={"sm"}
            mt={"10px"}
            w={"100%"}
            value={"Enter"}
          />
        </Box>
      </Center>
    </Container>
  );
};
