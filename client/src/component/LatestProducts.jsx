import { useQuery } from "@apollo/client";
import React, { useEffect } from 'react'; 
import { GET_LATEST_PRODUCTS } from "../graphql/queries";

const LatestProducts = ({ handleDataFetch }) => {
  const { loading, error, data } = useQuery(GET_LATEST_PRODUCTS);

  useEffect(() => {
    if (data && data.getLatestProducts) {
      const { products, totalProductsCount } = data.getLatestProducts;
      // Now you can safely use products and totalProductsCount
      handleDataFetch({ products, totalProductsCount });
    }
  }, [data, handleDataFetch]);
  


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message }</p>;

  return null; // This component only fetches data and doesn't display anything itself
}

export default LatestProducts;
