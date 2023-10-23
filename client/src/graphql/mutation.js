import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $role: Role!, $address: String!, $contactNumber: String!) {
    createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: $role, address: $address, contactNumber: $contactNumber) {
      address
      contactNumber
      email
      firstName
      id
      lastName
      password
      role
      status
    }
  }
`;
