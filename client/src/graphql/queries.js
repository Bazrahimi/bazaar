import { gql } from "@apollo/client";

export const GET_LATEST_PRODUCTS = gql`
  query GetLatestProducts {
    getLatestProducts {
      id
      name
      description
      price
      stock
    }
  }
`;
export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($category: String!) {
    getProductsByCategory(category: $category) {
      category
      description
      id
      imageURLs
      name
      price
      stock
    }
  }
`;
