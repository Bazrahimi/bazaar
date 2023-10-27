import { useQuery } from "@apollo/client";
import React, { useEffect } from 'react';
import { MOST_VIEWED_PRODUCTS } from "../graphql/queries";
import { useEditable } from "@chakra-ui/react";

// this a react functional component that can accep a prop( properties or arugument)
const MostViewedProducts = ({ handleDataFetch }) => {

  const { loading, error, data } = useQuery(MOST_VIEWED_PRODUCTS);

  useEffect(() => {
    if (data && data.MostViewedProducts) {
      // Destructure and the products and totalProuctscounts MostviewedProducts
      const { products, totalProductsCount } = data.MostViewedProducts;
      console.log(products)
  
  

      // Use the provided 'onDataFetched' function to pass the fetched data up the parenet comopont 
      handleDataFetch({ products, totalProductsCount})
    }

  }, [data, handleDataFetch]);

  // if the query is still laoding, display a loading message.
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message }</p>

  return null;
  
};

export default MostViewedProducts;

