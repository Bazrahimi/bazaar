import React from 'react';
import { useQuery } from "@apollo/client";
import { useLocation } from 'react-router-dom';
import { VStack } from '@chakra-ui/react';
import ProductGrid from '../component/ProductGrid';
import { GET_PRODUCTS_BY_SEARCH } from '../graphql/queries';
import navigateToProductDetails from '../utils/navigateToProductDetails'

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const term = searchParams.get('query'); 

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_SEARCH, {
    variables: { term: term },
    skip: !term
  });

  const handleProductClick = navigateToProductDetails(); 

  return (
    <VStack spacing={3}>
      {/* Display Loading or Error State */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {/* Render Search Results */}
      {data && <ProductGrid products={data.getProductsBySearch} onClick={handleProductClick} />}  {/* Use handleProductClick */}
    </VStack>
  );
};

export default SearchResults;
