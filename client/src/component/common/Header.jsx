import { Box, Button, Flex, Input, Text, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa'
import AuthService from '../../utils/auth';
import { FiLogOut } from 'react-icons/fi';
import '../../App.css'



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

  const handleAccountClick = () => {
    if (AuthService.loggedIn()) {
      const user = AuthService.getUser();
      if (user && user.data._id) {
        navigate(`/Dashboard/${user.data._id}`);
      } else {
        console.error("Unable to get user ID from token");
        // Handle the error appropriately, e.g., navigate to a generic dashboard or show an error message.
      }
    } else {
      navigate('/login');
    }
  };


  

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
          <Link to="/products/Book">
            <MenuItem>
              Books
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Box className="smallScreen" display={['block', 'block', 'none', 'none', 'none']} >
        <Button ml="2" leftIcon={<FaUser />} onClick={handleAccountClick}></Button>
        {AuthService.loggedIn() &&  <Button onClick={() => AuthService.logout(navigate)} ml="2" leftIcon={< FiLogOut />} color="red">logout</Button>}
        <Button onClick={goToCart} ml={2}>🛒</Button>
      </Box>
      


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

      <Box className="largeScreen" display={['none', 'none', 'block', 'block', 'block']}>
        <Button ml="2" leftIcon={<FaUser />} onClick={handleAccountClick}></Button>
        {AuthService.loggedIn() &&  <Button onClick={() => AuthService.logout(navigate)} ml="2" leftIcon={< FiLogOut />} color="red">logout</Button>}
        <Button onClick={goToCart} ml={2}>🛒 cart </Button>
     
      </Box>
      
      
    </Flex>
  );
}

export default Header;