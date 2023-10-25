import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation.js";
import { Box, Input, Button, FormControl, FormLabel, Select, VStack } from "@chakra-ui/react";



const  SignUpForm = () =>{
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    address: "",
    contactNumber: ""
  });

  const [createUser] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createUser({ variables: formData });
      console.log("User created:", data.createUser);
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={5} shadow="md" borderWidth="5px" rounded="md">
      <VStack spacing={2}>
        
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Role</FormLabel>
          <Select 
            name="role" 
            value={formData.role} 
            onChange={handleChange}
          >
            <option value="" disabled>Select a role</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
            <option value="both">Both</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Contact Number</FormLabel>
          <Input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
          />
        </FormControl>

        <Button colorScheme="teal" type="submit">Signup</Button>
      </VStack>
    </Box>
  );
}

export default SignUpForm;