import React, { useState, useCallback } from 'react';
import { Box, Text, Button } from "@chakra-ui/react"; 
import LatestProducts from '../component/LatestProducts';
import PopularProducts from '../component/PopularProduct';
import ProductGrid from '../component/ProductGrid';
import navigateToProductDetails from '../utils/navigateToProductDetails';
import useLoadMore from '../hooks/useLoadMore';

const Home = () => {
  
  const handleProductClick = navigateToProductDetails(); 

  // State for latest products
  const [latestProductsData, setLatestProductsData] = useState({
    products: [],
    totalProductsCount: 0
  });


  // Destructure for easier use
  const { products, totalProductsCount } = latestProductsData;
 

  const [productsToShow, loadMoreProducts, canLoadMore] = useLoadMore(8, totalProductsCount);
  
  // Set latest products data
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

<PopularProducts onClick={handleProductClick} />


      </Box>
    </Box>
  );
}

export default Home;
