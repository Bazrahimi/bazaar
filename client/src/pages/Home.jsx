import { Box, Text } from "@chakra-ui/react";
import React from 'react';
import LatestProducts from '../component/LatestProducts';
import ProductGrid from '../component/ProductGrid';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [latestProducts, setLatestProducts] = React.useState([]);
  const [categoryProducts, setCategoryProducts] = React.useState([]);

  const handleProductIdClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Box>
      <LatestProducts onDataFetched={setLatestProducts} />

      {/* Display Latest Products */}
      <Text mt={6} mb={4} fontSize="xl" fontWeight="bold">Latest Products</Text>
      <ProductGrid products={latestProducts} onClick={handleProductIdClick} />

      {/* Display Category Products */}
      <Text mt={6} mb={4} fontSize="xl" fontWeight="bold">Products by Category</Text>
      <ProductGrid products={categoryProducts} onClick={handleProductIdClick} />
    </Box>
  );
}

export default Home;
