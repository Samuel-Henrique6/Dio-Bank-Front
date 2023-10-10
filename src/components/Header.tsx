"use client";

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Container,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";
import { api } from "../api";
import { UserContext } from "../contexts/UserContext";

interface Dados {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [pageAtual, setPageAtual] = useState<any>();
  const location = useLocation();
  const navigate = useNavigate();
  const [dados, setDados] = useState<null | Dados>();
  const { setIsLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      const data: any | Dados = await api;
      setDados(data);
    };

    getData();
  }, []);

  const logout = () => {
    changeLocalStorage({ login: false });
    navigate("/");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const rota = window.location.href;
    const parteDaRota = rota.slice("https://diobankmt.netlify.app/".length);
    setPageAtual(parteDaRota);
  }, [location]);

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} mb={"2vw"}>
      <Container maxW={"1280px"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            Dio Bank
            <Link to={`/conta/${dados?.id}`} style={{ marginLeft: "1vw" }}>
              Conta
            </Link>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {pageAtual && pageAtual.length > 0 && (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem onClick={() => navigate(`/perfil`)}>
                      Perfil
                    </MenuItem>
                    <MenuItem onClick={() => logout()}>Logout</MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
