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
}

# Enum for user roles.
enum Role {
  buyer
  seller
}

type Query {
  getAllUsers: [User]
  getUser(id: ID!): User
}

type Mutation {
  createUser(firstName: String!, lastName: String!, email: String!, password: String!, role: Role!, address: String!, contactNumber: String!): User
  updateUser(id: ID!, firstName: String, lastName: String, email: String, password: String, role: Role, address: String, contactNumber: String ): User
  deleteUser(id: ID!): Boolean
  changePassword(id: ID!, currentPassword: String!, newPassword: String!): Boolean!

}
`;

module.exports = typeDefs;