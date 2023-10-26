import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS_BY_ID } from "../graphql/queries";
import { Box, Heading, Text, Image, VStack } from '@chakra-ui/react';
import { PRODUCT_VIEW_COUNT } from "../graphql/mutation";
import React from 'react';

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  // fetch product details using the Apollo useQuery hook
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_ID, { variables: { getProductsById: productId } });
  const [incrementProductViewCount] = useMutation(PRODUCT_VIEW_COUNT);

  React.useEffect(() => {
    if (productId) {
      incrementProductViewCount({ variables: { incrementProductViewCountId: productId } });
    }
  }, [productId, incrementProductViewCount]);


  
  // Handle loading error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Destructure product details from data
  const { category, createdAt, description, id, imageURLs, name, price, stock, seller } = data.getProductsById;

  return (
    <VStack spacing={3} align="start" p={4} boxShadow="lg" rounded="md">
      <Heading size="lg">{name}</Heading>
      {imageURLs.map((url, index) => (
        <Image key={index} boxSize="300px" src={url} alt={name}/>
      ))}
      <Text><strong>Category:</strong> {category}</Text>
      <Text><strong>Description:</strong> {description}</Text>
      <Text><strong>Price:</strong> ${price}</Text>
      <Text><strong>Stock:</strong> {stock}</Text>
      <Text><strong>Seller:</strong> {seller.firstName} ({seller.email})</Text>
    </VStack>
  );
};

export default ProductDetails;
