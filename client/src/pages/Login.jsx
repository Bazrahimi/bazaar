import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutation';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import auth from '../utils/auth';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { loading, error, data }] = useMutation(LOGIN_USER);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
  
      if (data && data.login.token) {
        localStorage.setItem('auth-token', data.login.token);
        auth.login(data.login.token);
        navigate('/ProductForm');
      }
    } catch (e) {
      console.error(e);
    }
  };
  

  return (
    <Box p={4} width="100%" maxWidth="600px" mx="auto">
      <form onSubmit={handleFormSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={formState.email}
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl id="password" mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={formState.password}
            placeholder="Enter your password"
          />
        </FormControl>

        <Button type="submit" isLoading={loading} colorScheme="blue">
          Login
        </Button>
        {/* Add this for "Sign Up Seller Account" button */}
        <Link to="/SignUpForm" style={{ display: 'block', marginTop: '16px' }}> 
          <Button colorScheme="blue">
             Sign Up Seller Account
          </Button>
        </Link>

        {error && <Box color="red.500" mt={2}>{error.message}</Box>}
      </form>
    </Box>
  );
};

export default Login;
