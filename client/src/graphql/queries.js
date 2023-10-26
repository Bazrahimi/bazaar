import { gql } from "@apollo/client";

export const GET_LATEST_PRODUCTS = gql`
  query GetLatestProducts {
    getLatestProducts {
      category
      description
      id
      imageURLs
      name
      stock
      price
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
      stock
      price

    }
  }
`;

export const GET_PRODUCTS_BY_ID = gql`
query Query($getProductsById: ID!) {
  getProductsById(id: $getProductsById) {
    category
    createdAt
    description
    id
    imageURLs
    name
    price
    stock
    seller {
      id
      firstName
      email
    }
  }
}
`;

export const GET_PRODUCTS_BY_SEARCH = gql`
query Query($term: String!) {
  getProductsBySearch(term: $term) {
    id
    imageURLs
    name
    price
  }
}
`;
