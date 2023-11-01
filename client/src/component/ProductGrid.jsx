import { Box, Grid, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import React from 'react';

const textStyles = {
  fontWeight: "bold",
  mt: 3,
  mb: 2,
  textAlign: "center",
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  paddingRight: "4px"
};

const ProductGrid = ({ products, showViewCount, onClick }) => {
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(2, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)"
  });

  return (
    <Grid gap={6} templateColumns={gridTemplateColumns}>
      {products.map(product => (
        <Box key={product.id} p={4} boxShadow="sm" borderRadius="md" _hover={{ cursor: 'pointer', boxShadow: 'md' }} onClick={() => onClick(product.id)}>
          <Box position="relative" width="100%">
            {product.imageURLs[0] && 
              <Image src={product.imageURLs[0]} alt={`${product.name}-thumbnail`} width="100%" objectFit="cover" borderRadius="md" />
            }
            <Box position="absolute" bottom="0" right="0" backgroundColor="blue.500" color="white" p={1} borderRadius="md" fontWeight="bold">
              ${product.price}
            </Box>
          </Box>
          <Text style={{ WebkitLineClamp: 2, ...textStyles }}>{product.name}</Text>
          {showViewCount && product.viewCount && (
            <Text mt={2} fontSize="sm" textAlign="center">
              Views: {product.viewCount}
            </Text>
          )}
        </Box>
      ))}
    </Grid>
  );
};

export default ProductGrid;
