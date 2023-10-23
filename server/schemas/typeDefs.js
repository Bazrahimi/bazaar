const { gql } = require('apollo-server-express');

const typeDefs = gql`
# User type for both buyer and sellers.
type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  role: Role!
  address: String!
  contactNumber: String!
  status: UserStatus
  products: [Product]!
}

# Enum for user roles.
enum Role {
  buyer
  seller
  both
  admin
  superadmin
}
enum UserStatus {
  active
  suspended
}

# Product Type
type Product {
  id: ID!
  name: String!
  description: String!
  imageURLs: [String]!
  price: Float!
  stock: Float!          # Added stock field
  seller: User!
}

type Query {
  getAllUsers: [User]
  getUser(id: ID!): User
  getLatestProducts: [Product]
  getProductsBySeller(id: ID!): [Product]
}

type Mutation {
  createUser(firstName: String!, lastName: String!, email: String!, password: String!, role: Role!, address: String!, contactNumber: String!): User
  updateUser(id: ID!, firstName: String, lastName: String, email: String, password: String, role: Role, address: String, contactNumber: String ): User
  deleteUser(id: ID!): Boolean
  changePassword(id: ID!, currentPassword: String!, newPassword: String!): String!
  suspendSeller(id: ID!): User
  promoteToAdmin(id: ID!): User

  createProduct(name: String!, description: String!, imageURLs: [String!]!, price: Float!, stock: Float, sellerId: ID): Product

  updateProduct(id: ID!, name: String, description: String, imageURLs: String!, price: Float, stock: Float): Product  # Added stock to update
  deleteProduct(id: ID!): Boolean
  
}

`;

module.exports = typeDefs;
