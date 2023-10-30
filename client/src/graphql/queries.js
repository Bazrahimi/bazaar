import { gql } from "@apollo/client";

export const GET_LATEST_PRODUCTS = gql`
  query GetLatestProducts {
    getLatestProducts {
      products {
        id
        imageURLs
        name
        price
      }
      totalProductsCount
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

export const MOST_VIEWED_PRODUCTS = gql`
  query MostViewedProducts {
    MostViewedProducts {
      products {
        name
        id
        price
        viewCount
        imageURLs
      }
      totalProductsCount
    }
  }
`;

export const GET_USER_DETAILS = gql`
  query Query($getUserDetailsId: ID!) {
    getUserDetails(id: $getUserDetailsId) {
      address
      contactNumber
      email
      firstName
      id
      lastName
      role
      status
    }
  }
`;

export const GET_PRODUCTS_BY_SELLER = gql`
query GetProductsBySeller($getProductsBySellerId: ID!) {
  getProductsBySeller(id: $getProductsBySellerId) {
    viewCount
    name
    price
    imageURLs
    id
  }
}
`;



