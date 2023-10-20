const { gql } = require('apollo-server-express');

const typeDefs = gql`
# User type for both buyer and sellers.
type User {
  id: ID!
  username: String!
  email: String!
  password: String!
  role: Role!

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
  createUser(username: String!, email: String!, password: String!, role: Role!): User
  updateUser(id: ID!, username: Sting!, email: String!, role: ROle): User
  deleteUser(id: Id!): Boolean
}
`;

module.exports = typeDefs;