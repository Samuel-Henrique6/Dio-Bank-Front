import { Box, useColorModeValue } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <Box minHeight="100vh" display={'flex'} flexDirection={'column'} bg={useColorModeValue("#9413dc", "#500c76")}>
      <Header />
      {children}
      <Footer />  
    </Box>
  );
};

export default Layout;
