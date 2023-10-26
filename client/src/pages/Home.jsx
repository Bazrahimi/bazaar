import React, { useState, useCallback } from 'react';
import { Box, Text, Button } from "@chakra-ui/react"; 
import LatestProducts from '../component/LatestProducts';
import ProductGrid from '../component/ProductGrid';
import navigateToProductDetails from '../utils/navigateToProductDetails';
import useLoadMore from '../hooks/useLoadMore';

const Home = () => {
  
  const handleProductClick = navigateToProductDetails(); 
  const [latestProductsData, setLatestProductsData] = useState({
    products: [],
    totalProductsCount: 0
  });

  // Destructure the products and totalProductsCount for easier use
  const { products, totalProductsCount } = latestProductsData;

  const [productsToShow, loadMoreProducts, canLoadMore] = useLoadMore(9, totalProductsCount);
  const setProductsData = useCallback(data => {
    setLatestProductsData(data);
}, []);

  return (
    <Box> 
      <LatestProducts onDataFetched={setProductsData} />
      <Text mt={6} mb={4} fontSize="xl" fontWeight="bold">Latest Products</Text>
      <ProductGrid products={products.slice(0, productsToShow)} onClick={handleProductClick} />

      <Box display="flex" flexDirection="column" justifyContent="space-between">
         {/* Adjusted the minHeight for better layout, adjust as needed */}

         {canLoadMore &&
          <Button mr={10} mb={10} mt={20} alignSelf="flex-end" onClick={loadMoreProducts}>More Products...</Button>
         }
      </Box>
    </Box>
  );
}

export default Home;
