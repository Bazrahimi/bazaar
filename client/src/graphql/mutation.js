

import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser(
        $firstName: String!,
        $lastName: String!,
        $email: String!,
        $password: String!,
        $role: String!,
        $address: String,
        $contactNumber: String
    ) {
        createUser(
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            password: $password,
            role: $role,
            address: $address,
            contactNumber: $contactNumber
        ) {
            id
            email
        }
    }
`;
