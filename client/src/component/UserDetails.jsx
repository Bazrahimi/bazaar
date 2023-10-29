// UserDetails.jsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_DETAILS } from '../graphql/queries';

const UserDetails = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { getUserDetailsId: userId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { address, contactNumber, email, firstName, lastName, role, status } = data.getUserDetails;

  return (
    <div>
      <p>Name: {firstName} {lastName}</p>
      <p>Email: {email}</p>
      <p>Contact: {contactNumber}</p>
      <p>Address: {address}</p>
      <p>Role: {role}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default UserDetails;
