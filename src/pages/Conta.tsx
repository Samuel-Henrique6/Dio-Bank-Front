import { Center, Container, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../components/CardInfo";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

interface Dados {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Conta = () => {
  const [dados, setDados] = useState<null | Dados>();
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  const actualData = new Date();

  useEffect(() => {
    const getData = async () => {
      const data: any | Dados = await api;
      setDados(data);
    };

    getData();
  }, []);

  !isLoggedIn && navigate("/");

  if (dados && id !== dados.id) {
    navigate("/");
  }
  return (
    <Container maxWidth={"1100px"} flex={'1 0 auto'}>
      <Center>
        <SimpleGrid columns={2} spacing={8} p={16}>
          {!dados ? (
            <Center>
              <Spinner size={"xl"} color={"#FFF"} />
            </Center>
          ) : (
            <>
              <CardInfo
                title={`Bem vindo ${dados?.name}!`}
                content={`${actualData
                  .getDate()
                  .toString()
                  .padStart(2, "0")}/${(actualData.getMonth() + 1)
                  .toString()
                  .padStart(
                    2,
                    "0"
                  )}/${actualData.getFullYear()} ${actualData.getHours()}:${actualData
                  .getMinutes()
                  .toString()
                  .padStart(2, "0")}`}
              />
              <CardInfo
                title={"Saldo"}
                content={`R$ ${dados?.balance.toFixed(2)}`}
              />
              <Link to={`/conta/${id}/info`}>
                <CardInfo
                  title={"Informações da Conta"}
                  content={"Ver detalhes!"}
                />
              </Link>
            </>
          )}
        </SimpleGrid>
      </Center>
    </Container>
  );
};

export default Conta;
