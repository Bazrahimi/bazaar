import React from 'react';
import { Box, Text } from "@chakra-ui/react";
import LatestProducts from '../component/LatestProducts';
import ProductGrid from '../component/ProductGrid';
import navigateToProductDetails from '../utils/navigateToProductDetails'

const Home = () => {
  const handleProductClick = navigateToProductDetails(); 

  const [latestProducts, setLatestProducts] = React.useState([]);
  const [categoryProducts, setCategoryProducts] = React.useState([]);

  return (
    <Box>
      <LatestProducts onDataFetched={setLatestProducts} />

      {/* Display Latest Products */}
      <Text mt={6} mb={4} fontSize="xl" fontWeight="bold">Latest Products</Text>
      <ProductGrid products={latestProducts} onClick={handleProductClick} />

      {/* Display Category Products */}
      <Text mt={6} mb={4} fontSize="xl" fontWeight="bold">Products by Category</Text>
      <ProductGrid products={categoryProducts} onClick={handleProductClick} />
    </Box>
  );
}

export default Home;
