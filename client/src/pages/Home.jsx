import React, { useState, useCallback } from 'react';
import { Box, Text, Button } from "@chakra-ui/react"; 
import LatestProducts from '../component/LatestProducts';
import MostViewedProducts from '../component/MostViewedProducts';
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

  const [MostViewedProductsData, setMostViewedData] = useState({
    products: [],
    totalProductsCount: 0
  });

  const handleMostViewedData = useCallback(data => {
    setMostViewedData(data);
}, []);




  const [productsToShow, loadMoreProducts, canLoadMore] = useLoadMore(9, totalProductsCount);
  const setProductsData = useCallback(data => {
    setLatestProductsData(data);
}, []);

  return (
    <Box> 
      <LatestProducts handleDataFetch={setProductsData} />
      <Text mt={6} mb={1} fontSize="35px" fontWeight="bold" textAlign="center">Latest Products</Text>
      <ProductGrid products={products.slice(0, productsToShow)} onClick={handleProductClick} />

      <Box display="flex" flexDirection="column" justifyContent="space-between">
       {canLoadMore &&
          <Button mr={10} mb={10} mt={20} alignSelf="flex-end" onClick={loadMoreProducts}>More Latest Products...</Button>
         }

        <MostViewedProducts handleDataFetch={setMostViewedData} />
        <Text mt={6} mb={1} fontSize="35px" fontWeight="bold" textAlign="center" color="red">Popular Products</Text>
        <ProductGrid products={products.slice(0, productsToShow)} onClick={handleProductClick} />
        
      </Box>
    </Box>
  );
}

export default Home;
