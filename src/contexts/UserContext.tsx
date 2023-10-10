import { createContext, useState } from "react";
import { getLocalStorage } from "../services/storage";

interface IUserContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const UserContext = createContext({} as IUserContext);

export function UserContextProvider({ children }: any) {
  const user = "Samuel";
  const storage: any = getLocalStorage();
  const { login } = JSON.parse(storage);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(login);

  return (
    <UserContext.Provider
      value={{
        user,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
