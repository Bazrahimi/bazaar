const { gql } = require('apollo-server-express');

const typeDefs = gql`
# User type for both buyer and sellers.
type User {
  id: ID!
  firtName: String!
  lastName: String!
  email: String!
  password: String!
  role: Role!
  address: String!
  contactNumber: String!
}

# Enum for user roles.
enum Role {
  BUYER
  SELLER
}

type Query {
  getAllUsers: [User]
  getUser(id: ID!): User
}

type Mutation {
  createUser(firstName: String!, lastName: String!, email: String!, password: String!, role: Role!, address: String!, contactNumber: String!): User
  updateUser(id: ID!, name: String!, email: String!, role: Role): User
  deleteUser(id: ID!): Boolean
}
`;

module.exports = typeDefs;