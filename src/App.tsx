import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import { LoginPage } from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import { UserContext, UserContextProvider } from "./contexts/UserContext";
import { useContext, useEffect } from "react";
import NotFound from "./pages/NotFound";
import { createLocalStorage, getLocalStorage } from "./services/storage";
import Perfil from "./pages/Perfil";

export function PrivateRoute({ children }: any) {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    const checkAuthentication = async () => {
      if (isLoggedIn === false) {
        navigate("/");
      }
    };

    checkAuthentication();
  }, [navigate]);
  console.log(isLoggedIn);
  return children;
}

function App() {
  !getLocalStorage() && createLocalStorage();

  return (
    <Router>
      <ChakraProvider>
        <UserContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route
                path="/conta/:id"
                element={
                  <PrivateRoute>
                    <Conta />
                  </PrivateRoute>
                }
              />
              <Route
                path="/conta/:id/info"
                element={
                  <PrivateRoute>
                    <ContaInfo />
                  </PrivateRoute>
                }
              />
              <Route
                path="/perfil"
                element={
                  <PrivateRoute>
                    <Perfil />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PrivateRoute>
                    <NotFound />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Layout>
        </UserContextProvider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
