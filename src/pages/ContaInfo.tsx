import { Container, Text } from "@chakra-ui/react";

const ContaInfo = () => {


  return (
    <Container maxWidth={"1100px"} flex={'1 0 auto'}>
      <Text fontSize={"3xl"} fontWeight={900}>
        Informações da Conta
      </Text>
    </Container>
  );
};

export default ContaInfo;
