import { Box, Button, Flex, Input, Text, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Auth from '../../utils/auth';

const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    Auth.logout();
  }

  return (
    <Flex as="header" bg="teal.500" alignItems="center">
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

      <Menu>
        <MenuButton as={Button} leftIcon={<HamburgerIcon />} bg="transparent" _hover={{ bg: "transparent" }} ml={0}>
          Shop By Category
        </MenuButton>
        <MenuList>
          <Link to="/products/Electronic">
            <MenuItem>
              Electronics
            </MenuItem>
          </Link>
          <Link to="/products/Fashion">
            <MenuItem>
              Fashion
            </MenuItem>
          </Link>
          <Link to="/products/Home and Garden">
            <MenuItem>
              Home & Garden
            </MenuItem>
          </Link>
          <Link to="/products/Book">
            <MenuItem>
              Books
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Flex marginLeft="auto" alignItems="center" flexGrow={1}>
        <Input
          type="text"
          placeholder='Search for products...'  bg="white"
          marginRight={1} 
          flexGrow={1} 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Flex>
      <Box>
        {Auth.loggedIn() ? (
          <Button onClick={logout}>Logout</Button>
          ) : (
          <>
            <Link to="/login">
              <Button variant="ghost" color="white" marginLeft={2}>Login</Button>
            </Link>
            <Link to="/SignUpForm">
              <Button variant="ghost" color="white" marginLeft={2}>Sign Up</Button>
            </Link>
            <Link to="/ProductForm">
              <Button variant="ghost" color="white" marginLeft={2}>Sell</Button>
            </Link>
          </>
        )}
      </Box>

      <Text marginLeft={2} marginRight={15} color="white">🛒 Cart</Text>

    </Flex>
  );
}

export default Header;
