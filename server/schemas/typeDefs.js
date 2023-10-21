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

type Query {
  getAllUsers: [User]
  getUser(id: ID!): User
}

type Mutation {
  createUser(firstName: String!, lastName: String!, email: String!, password: String!, role: Role!, address: String!, contactNumber: String!): User
  updateUser(id: ID!, firstName: String, lastName: String, email: String, password: String, role: Role, address: String, contactNumber: String ): User
  deleteUser(id: ID!): Boolean
  changePassword(id: ID!, currentPassword: String!, newPassword: String!): String!
  suspendSeller(id: ID!): User
  promoteToAdmin(id: ID!): User

}
`;

module.exports = typeDefs;