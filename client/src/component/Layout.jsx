import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Header from './common/Header';
import Footer from './common/Footer';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box as="main" p={4} flex="1" direction="column">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
