import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from 'react'; 
import { Text } from "@chakra-ui/react";
import ProductGrid from '../component/ProductGrid';
import { MOST_VIEWED_PRODUCTS } from "../graphql/queries";

const PopularProducts = ({ onClick }) => {
  const { loading, error, data } = useQuery(MOST_VIEWED_PRODUCTS);

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    if (data && data.MostViewedProducts) {
      const { products } = data.MostViewedProducts;
      setPopularProducts(products);
      setPopularProducts(products.slice(0, 8));
    }
  }, [data]);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message }</p>;

  return (
    <div>
      <Text mt={6} mb={1} fontSize="35px" fontWeight="bold" textAlign="center">Popular Products</Text>
      <ProductGrid products={popularProducts} showViewCount={true} onClick={onClick} />
    </div>
  );
}

export default PopularProducts;
