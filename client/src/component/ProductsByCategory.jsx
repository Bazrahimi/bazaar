import { useQuery } from "@apollo/client";
import { GET_PRODUCTS_BY_CATEGORY } from "../graphql/queries";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import ProductGrid from './ProductGrid';

const ProductsByCategory = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { category }
  });

  const handleProductIdClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: { error.message }</p>;

  return (
    <Box mt={6}>
      <Text fontSize="xl" fontWeight="bold">Products in {category}</Text>
      <ProductGrid products={data.getProductsByCategory} onClick={handleProductIdClick} />
    </Box>
  );
}

export default ProductsByCategory;
