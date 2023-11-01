import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_DETAILS } from '../graphql/queries';
import { Box, VStack, Text, Divider, Heading, Badge } from '@chakra-ui/react';

const UserDetails = ({ userId, onUserFetched }) => {
  const { loading, error, data } = useQuery(GET_USER_DETAILS, {
    variables: { getUserDetailsId: userId }
  });

  let firstName, lastName, address, contactNumber, email, role, status;

  if (data && data.getUserDetails) {
    ({ firstName, lastName, address, contactNumber, email, role, status } = data.getUserDetails);
  }

  React.useEffect(() => {
    if (onUserFetched && firstName && lastName) {
      onUserFetched(firstName, lastName);
    }
  }, [firstName, lastName, onUserFetched]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text color="red.500">Error: {error.message}</Text>;

  return (
    <Box borderRadius="md" boxShadow="lg" padding={5} bg="white">
      <VStack spacing={3} align="flex-start">
        <Heading size="md">{firstName} {lastName}</Heading>
        <Text fontSize="sm" color="gray.600">Role: <Badge colorScheme="purple">{role}</Badge></Text>
        <Text fontSize="sm" color="gray.600">Status: <Badge colorScheme={status === 'Active' ? 'green' : 'red'}>{status}</Badge></Text>
        <Divider my={2} />
        <Text fontSize="sm" color="gray.600">Email: {email}</Text>
        <Text fontSize="sm" color="gray.600">Contact: {contactNumber}</Text>
        <Text fontSize="sm" color="gray.600">Address: {address}</Text>
      </VStack>
    </Box>
  );
};

export default UserDetails;
