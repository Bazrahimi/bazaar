
import { useQuery } from "@apollo/client";
import React, { useEffect } from 'react'; // Import useEffect from react
import { GET_LATEST_PRODUCTS } from "../graphql/queries";

const LatestProducts = ({ onDataFetched }) => {
  const { loading, error, data } = useQuery(GET_LATEST_PRODUCTS);

  useEffect(() => {
    if (data && data.getLatestProducts) {
      onDataFetched(data.getLatestProducts);
    }
  }, [data, onDataFetched]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message }</p>;

  return null; // This component only fetches data and doesn't display anything itself
}

export default LatestProducts;



