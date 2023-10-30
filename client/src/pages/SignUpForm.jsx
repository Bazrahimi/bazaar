import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation.js";
import { Box, Input, Button, FormControl, FormLabel, Select, VStack } from "@chakra-ui/react";
import Auth from '../utils/auth.js'


// Define the SingUp functional component
const  SignUpForm = () =>{
  // initialize local state for Formd Data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    address: "",
    contactNumber: ""
  });

  // Initialize the creature user mutation
  const [createUser] = useMutation(CREATE_USER);
  const [error, setError] = useState("");
  
  // Define functiont to handle change in form
  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure name and value properties from the event target
    setFormData((prevData) => ({
      ...prevData, // spread previous form data
      [name]: value // update the form data for the specific input that changed
    }));
  };
  // Define a function to handle a a form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.role ||
      !formData.address ||
      !formData.contactNumber
    ) {
      setError("All fields are required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError(""); 
    try {
      const { data } = await createUser({
        variables: formData});
        const userId = data.createUser.user.id;
        console.log(createUser);
        console.log(data);

        Auth.login(data.createUser.token, userId);
      
    } catch (error) {
      console.error("Error creating user:", error.message);
      setError("Failed to create user");
     
    }
  };

  return (
    <Box 
      as="form"
      onSubmit={handleSubmit} 
      p={5} 
      shadow="md" 
      borderWidth="5px" 
      rounded="md" 
      maxW="600px" 
      width={["100%", "80%", "60%", "600px"]} 
      mx="auto"
    >
      <VStack spacing={2}>
        
        <FormControl>
          <Input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
        </FormControl>

        <FormControl>
          <Input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
        </FormControl>

        <FormControl>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </FormControl>

        <FormControl>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete="off"
          />
        </FormControl>

        <FormControl>
          <Input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            autoComplete="off"
          />
        </FormControl>

        <FormControl>
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
          <Input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
          />
        </FormControl>

        <FormControl>
          <Input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
          />
        </FormControl>
        

        

        <Button colorScheme="teal" type="submit">Sign Up</Button>
        {error && (
          <Box color="red.500" mt={3}>
            {error}
          </Box>
        )}


      </VStack>
      
      
    </Box>
    
  );
}

export default SignUpForm;