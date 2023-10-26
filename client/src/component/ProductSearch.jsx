import React from 'react';
import { useQuery } from "@apollo/client";
import { useLocation } from 'react-router-dom'; // <-- Import this
import { Box, VStack } from '@chakra-ui/react';
import ProductGrid from './ProductGrid'; 
import { GET_PRODUCTS_BY_SEARCH } from '../graphql/queries';



const ProductSearch = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const term = searchParams.get('query'); 

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_SEARCH, {
    variables: { term: "term" },
    skip: !term
  });

  return (
    <VStack spacing={3}>
      {/* Display Loading or Error State */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {/* Render Search Results */}
      {data && <ProductGrid products={data.getProductsBySearch} onClick={(id) => {
        // handle product click here, e.g., navigate to product details page
      }} />}
    </VStack>
  );
};

export default ProductSearch;
