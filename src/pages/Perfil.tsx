import { useEffect, useState } from "react";
import { api } from "../api";
import { Center, Container, Text } from "@chakra-ui/react";

interface Dados {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Perfil = () => {
  const [dados, setDados] = useState<null | Dados>();

  useEffect(() => {
    const getData = async () => {
      const data: any | Dados = await api;
      setDados(data);
    };

    getData();
  }, []);

  return (
    <Container maxWidth={"1100px"} flex={'1 0 auto'}>
      <Center>
        <Text fontSize={"2xl"} fontWeight={900} pb={20}>
          Dados pessoais
        </Text>
      </Center>
      <Text fontSize={"xl"}><strong>Nome:</strong> {dados?.name}</Text>
      <Text fontSize={"xl"}><strong>Email:</strong> {dados?.email}</Text>
    </Container>
  );
};

export default Perfil;
