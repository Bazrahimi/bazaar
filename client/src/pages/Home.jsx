import { Box, Button, Spacer } from "@chakra-ui/react";
import React from 'react';
import LatestProducts from '../component/LatestProducts';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  // function to navigae to product based on category
  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  return (
    <Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Button colorScheme="blue" mr={20} onClick={() => handleCategoryClick('Electronic')}>
          Electronics
        </Button>
        <Button colorScheme="blue" mr={20} onClick={() => handleCategoryClick('Fashion')}>
          Fashion
        </Button>
        <Button colorScheme="blue" mr={20} onClick={() => handleCategoryClick('Home and Garden')}>
          Home & Garden
        </Button>
        <Button colorScheme="blue" onClick={() => handleCategoryClick('Book')}>
          Books
        </Button>
      </Box>
      <LatestProducts />
    </Box>
  );
}

export default Home;