import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from 'react';
import { GET_PRODUCTS_BY_SELLER } from "../graphql/queries";
import ProductGrid from "../component/ProductGrid";
import ProductDetailsModal from "./ProductDetailsModal";
import { Box } from "@chakra-ui/react";

const ProductsBySeller = ({ sellerId }) => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_SELLER, { variables: { getProductsBySellerId: sellerId } });

  // state to keep track of the currently selected product.
  const [selectedProduct, setSelectedProduct] = useState(null);

  // function to handle click event on product.
  const handleProductClick = (id) =>{
    const product = data.getProductsBySeller.find(p =>p.id === id);
    // updating the selectedProduct state with the found product.
    setSelectedProduct(product);
    console.log(product);
  }

  

  useEffect(() => {
    if (data && data.getProductsBySeller) {
      const products = data.getProductsBySeller;
    }
  }, [data]);

  return (
    <Box>
      
      {loading && <p>Loading...</p>}

      {error && <p>Error: { error.message}</p>}

      {data && data.getProductsBySeller && data.

      getProductsBySeller.length === 0 && <p>You have no products listed at the moment.</p>}

      {data && data.getProductsBySeller && <ProductGrid products={data.getProductsBySeller} onClick={handleProductClick} />}

      {selectedProduct && <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}


    </Box>
    
  )
};


export default ProductsBySeller;