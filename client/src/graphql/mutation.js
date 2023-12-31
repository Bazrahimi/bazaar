import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $role: Role!, $address: String!, $contactNumber: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: $role, address: $address, contactNumber: $contactNumber) {
      token 
      user {
        id
      }
    }
  }
`;

export const PRODUCT_LISTING = gql`
mutation CreateProduct($name: String!, $description: String!, $category: String!, $imageURLs: [String!]!, $price: Float!, $stock: Float, $sellerId: ID) {
  createProduct(name: $name, description: $description, category: $category, imageURLs: $imageURLs, price: $price, stock: $stock, sellerId: $sellerId) {
    description
    category
    id
    imageURLs
    name
    price
    stock
  }
}
`;

export const PRODUCT_VIEW_COUNT = gql`
  mutation Mutation($incrementProductViewCountId: ID!) {
    incrementProductViewCount(id: $incrementProductViewCountId) {
      name
      id 
      viewCount
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        firstName
        lastName
        id
        role
      }
    }
  }

`;

export const DELETE_PRODUCT = gql`
  mutation Mutation($deleteProductId: ID!) {
    deleteProduct(id: $deleteProductId)
  }
`;
