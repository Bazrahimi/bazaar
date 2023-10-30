import { useQuery } from "@apollo/client";
import React, { useEffect } from 'react';
import { GET_PRODUCTS_BY_SELLER } from "../graphql/queries";
import ProductGrid from "../component/ProductGrid";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductsBySeller = ({ sellerId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_SELLER, { variables: { getProductsBySellerId: sellerId } });

  

  useEffect(() => {
    if (data && data.getProductsBySeller) {
      const products = data.getProductsBySeller;
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message }</p>;
  return <ProductGrid products={data.getProductsBySeller} onClick={id => console.log("Product clicked:", id)} />;
};


export default ProductsBySeller;