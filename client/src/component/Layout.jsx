
import { Link } from 'react-router-dom';
import logo from '../../src/assets/logo/logo.png'

import { Box, Button, Flex, Input, Text, Image } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Flex as="header" bg="teal.500" alignItems="center">
        <Flex as="header" p={1} bg="teal.500" alignItems="center">
          <Link to="/" _hover={{ textDecoration: 'none' }}>
            <Box 
              display="inline-block"
              padding="0.5rem 1rem"
              borderRadius="md"
              transition="background-color 0.2s"
              _hover={{ backgroundColor: "teal.600" }}
            >
              <Text as="span" fontSize="3xl" fontWeight="bold" color="purple.500">e</Text>
              <Text as="span" fontSize="4xl" fontWeight="bold" color="purple.700">Bazaar</Text>
              <Text fontSize="xs" color="gray.600" mt="-4" ml="2">🛒 Modern Marketplace</Text>
            </Box>
          </Link>
        </Flex>

        <Flex marginLeft="auto" alignItems="center" flexGrow={1}>
          <Input type="text" placeholder='Search for products...' bg="white" marginRight={-7} flexGrow={1} />
          <Button colorScheme="teal">Search</Button>
        </Flex>

        <Link to="/login"><Button variant="ghost" color="white" marginLeft={2}>Login</Button></Link>
        <Link to="/ProductForm"><Button variant="ghost" color="white" marginLeft={2}>Sell</Button></Link>
        <Link to="/SignUpForm"><Button variant="ghost" color="white" marginLeft={2}>Sign Up</Button></Link>

        <Text marginLeft={2} color="white">🛒</Text>

      </Flex>

      <Box as="main" p={4}>
        {children}
      </Box>

      <Flex as="footer" p={4} bg="teal.700" direction="column" alignItems="center">
        
        <Flex marginBottom={2}>
          <Text as="a" href="#" color="teal.100" marginRight={2}>Contact Us</Text>
          <Text as="a" href="#" color="teal.100" marginRight={2}>Terms of Service</Text>
          <Text as="a" href="#" color="teal.100">Privacy Policy</Text>
        </Flex>
        
        <Flex>
          <Link to="#"><Image src="../src/assets/images/icons/facebook/Facebook_Logo_(2019).png" alt="Facebook" w="30px" marginRight={5} /></Link>
          <Link to="#"><Image src="../../src/assets/images/icons/twitter/Logo_of_Twitter.svg.png" alt="Twitter" w="30px" marginRight={5} /></Link>
          <Link to="#"><Image src="../../src/assets/images/icons/instagram/Instagram.png" alt="Instagram" w="30px" /></Link>
        </Flex>

      </Flex>
    </Box>
  );
}

export default Layout;
