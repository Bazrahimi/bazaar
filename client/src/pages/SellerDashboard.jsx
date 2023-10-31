import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Button, Text, Flex, VStack, Heading } from '@chakra-ui/react';
import { FiLogOut } from 'react-icons/fi';
import UserDetails from '../component/UserDetails';
import ProductsBySeller from '../pages/ProductsBySeller';
import AuthService from '../utils/auth'

const SellerDashboard = () => {
  const { id } = useParams();
  const [showProducts, setShowProducts] = useState(false);

  const [userName, setUserName] = useState(null);


  const handleUserFetched = (firstName, lastName) => {
    setUserName(`${firstName} ${lastName}`);
  };


  const getGreeting = () => {
    const hours = new Date().getHours();
    const greeting = hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
    // Added condition to check if userName is available
    return userName ? `${greeting}, ${userName}!` : greeting;
  };
  const handleSignOut = () => {
   AuthService.logout();
   
  };

  return (
   
    <VStack>
        <VStack marginEnd="-20px">
        <Button onClick={handleSignOut} colorScheme="red" leftIcon={<FiLogOut />} >Sign Out</Button>

        </VStack>
    <Box padding={5}>
      <VStack spacing={4} align="flex-start">  
        <Heading>{getGreeting()}</Heading>
        <Text>Welcome back to your dashboard. Here you can manage your products and account settings.</Text>
      </VStack>
      <Flex direction="column" mt={5}>
        <UserDetails userId={id} onUserFetched={handleUserFetched} />
        <Flex mt={3} direction={["column", "row"]} gap={3}>
          <Link to={`/ProductForm/${id}`} style={{ textDecoration: 'none' }}>
            <Button colorScheme="teal" width={["100%", "auto"]}>List your Products</Button>
          </Link>
          <Button colorScheme="purple" onClick={() => setShowProducts(!showProducts)} width={["100%", "auto"]}>My Listed Products</Button>
        </Flex>
        {showProducts && <ProductsBySeller sellerId={id} />}
      </Flex>
    </Box>
    </VStack>

  );
};

export default SellerDashboard;
