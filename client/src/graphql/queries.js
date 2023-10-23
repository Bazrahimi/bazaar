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
