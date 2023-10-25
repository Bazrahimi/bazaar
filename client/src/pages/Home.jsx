import { Box, Button, Flex, Grid, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from 'react';
import LatestProducts from '../component/LatestProducts';
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = React.useState([]);

  const handleProductIdClick = (productId) => {
    navigate(`/product/${productId}`);
  };



  const handleCategoryClick = (category) => {
    navigate(`/products/${category}`);
  };

  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)"
  });

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
      <LatestProducts onDataFetched={setProducts} />

      <Grid templateColumns={gridTemplateColumns} gap={6}>
  {products.map(product => (
    <Box key={product.id} p={4} boxShadow="sm" borderRadius="md" _hover={{ cursor: 'pointer', boxShadow: 'md' }} onClick={() => handleProductIdClick(product.id)}>
      <Box position="relative" width="100%">
        {product.imageURLs[0] && 
          <Image src={product.imageURLs[0]} alt={`${product.name}-thumbnail`} width="100%" objectFit="cover" borderRadius="md" />
        }
        <Box position="absolute" bottom="0" right="0" backgroundColor="blue.500" color="white" p={1} borderRadius="md" fontWeight="bold">
          ${product.price}
        </Box>
      </Box>
      <Text fontWeight="bold" mt={3} mb={2} textAlign="center">{product.name}</Text>
    </Box>
  ))}
</Grid>






    </Box>
  );
}

export default Home;