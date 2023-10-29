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
  category: String!
  description: String!
  imageURLs: [String]!
  price: Float!
  stock: Float!
  createdAt: String!        
  seller: User!
  viewCount: Int!
  
}

type LatestProductsResponse {
    products: [Product]!
    totalProductsCount: Int!
    }

type MostViewedProducts {
    products: [Product]!
    totalProductsCount: Int!
   }

type Query {
  getAllUsers: [User]
  getUserDetails(id: ID!): User
  
  getProductsByCategory(category:String!): [Product]
  getLatestProducts: LatestProductsResponse
  MostViewedProducts: MostViewedProducts
  getProductsBySeller(id: ID!): [Product]
  getProductsById(id:ID!): Product
  getProductsBySearch(term:String!): [Product]
}

type Mutation {
  login(email: String!, password: String!): Auth
  createUser(firstName: String!, lastName: String!, email: String!, password: String!, role: Role!, address: String!, contactNumber: String!): User
  updateUser(id: ID!, firstName: String, lastName: String, email: String, password: String, role: Role, address: String, contactNumber: String ): User
  deleteUser(id: ID!): Boolean
  changePassword(id: ID!, currentPassword: String!, newPassword: String!): String!
  suspendSeller(id: ID!): User
  promoteToAdmin(id: ID!): User

  createProduct(name: String!, category: String!, description: String!, imageURLs: [String!]!, price: Float!, stock: Float, sellerId: ID): Product

  updateProduct(id: ID!, name: String, description: String, imageURLs: String!, price: Float, stock: Float): Product  # Added stock to update
  deleteProduct(id: ID!): Boolean

  incrementProductViewCount(id: ID!): Product
  
}

type Auth {
  token: ID!
  user: User!
}

`;

module.exports = typeDefs;
