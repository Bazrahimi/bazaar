import { Box, Button, Flex, Input, Text, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?query=${searchTerm}`);
    }
  }

  const goToCart = () => {
    navigate('/cart')
  }

  return (
    <Flex as="header" bg="teal.500" alignItems="center" paddingX={4} flexWrap="wrap"> 
      <Link to="/" _hover={{ textDecoration: 'none' }}>
        <Box
          display="flex" 
          alignItems="center" 
          padding="0.5rem 1rem"
          borderRadius="md"
          transition="background-color 0.2s"
          _hover={{ backgroundColor: "teal.600" }}
          mb={[2, 2, 0]}  // Add bottom margin on small screens
        >
          <Text as="span" fontSize={["2xl", "3xl"]} fontWeight="bold" color="purple.500">e</Text>
          <Text as="span" fontSize={["3xl", "4xl"]} fontWeight="bold" color="purple.700" ml={1}>Bazaar</Text>
        </Box>
      </Link>

      <Menu>
        <MenuButton as={Button} leftIcon={<HamburgerIcon />} bg="transparent" _hover={{ bg: "transparent" }} ml={0}>
          <Box display={['none', 'none', 'block', 'block']}>
            Shop By Category
          </Box>
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
          <Link to="/products/Books">
            <MenuItem>
              Books
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Flex flexGrow={1} ml="auto" alignItems="center" width={['100%', '100%', 'auto']} mt={[2, 2, 0]} mb={[2, 2, 0]}>
        <Input
          type="text"
          placeholder='Search for products...'
          bg="white"
          marginRight={1}
          flexGrow={1}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </Flex>
      <Button ml="2">Sell-Now</Button>
      <Button ml="2">Shop-Now</Button>
      <Button onClick={goToCart} ml={2}>🛒</Button>
      
    </Flex>
  );
}

export default Header;