import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutation';
import { Box, Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import auth from '../utils/auth';
import { useNavigate, Link } from 'react-router-dom';

// Login component
const Login = () => {
  // state for managing form input
  const [formState, setFormState] = useState({ email: '', password: '' });
  // state for managing login errors
  const [loginError, setLoginError] = useState(null);
  // Destructure loading, error, data from mutation.
  const [login, { loading, error, data }] = useMutation(LOGIN_USER);
  // hook for programatic navigation.
  const navigate = useNavigate();

  // Handler function for form input change, updating formstate
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // Hander funtiuon for form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({ variables: { ...formState } });
      console.log("Login data:", data);
      if (data && data.login.token) {
        // Check if the token is expired
        if (auth.isTokenExpired(data.login.token)) {
          setLoginError('Session has expired. Please log in again.');
        } else {
          auth.login(data.login.token, data.login.user.id);
        }
      } else {
        setLoginError('Failed to authenticate. Please try again.');
      }
    } catch (e) {
      console.error(e);
      setLoginError('Login failed. Please check your credentials.');
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
        
        <Link to="/SignUpForm" style={{ display: 'block', marginTop: '16px' }}>
          <Button colorScheme="blue">
            Sign Up Account
          </Button>
        </Link>

        {error && <Box color="red.500" mt={2}>{error.message}</Box>}
        {loginError && <Box color="red.500" mt={2}>{loginError}</Box>}
      </form>
    </Box>
  );
};

export default Login;
