import { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../services/storage";
import { api } from "../api";

interface Dados {
  email: string;
  password: string;
  name: string;
  id: string;
}

interface IUserContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  dados: any;
  setDados: (dados: null | Dados) => void;
}

export const UserContext = createContext({} as IUserContext);

export function UserContextProvider({ children }: any) {
  const user = "Samuel";
  const storage: any = getLocalStorage();
  const { login } = JSON.parse(storage ? storage : false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(login);
  const [dados, setDados] = useState<null | Dados>();

  useEffect(() => {
    const getData = async () => {
      const data: any | Dados = await api;
      setDados(data);
    };

    getData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        setIsLoggedIn,
        dados,
        setDados,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
