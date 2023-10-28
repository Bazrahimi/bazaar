import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation.js";
import { Box, Input, Button, FormControl, FormLabel, Select, VStack } from "@chakra-ui/react";

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
  const [success, setSuccess] = useState("");

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
      const { data } = await createUser({ variables: formData });
      console.log("User created:", data.createUser);
      setSuccess("User created successfully!");
      window.location.reload();

      
    } catch (error) {
      console.error("Error creating user:", error.message);
      setError("Failed to create user");
      setSuccess("")
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
            autoComplete="off"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Confirm Password</FormLabel>
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
        {error && (
          <Box color="red.500" mt={3}>
            {error}
          </Box>
        )}
          {success && (
            <Box color="green.500" mt={3}>
              {success}
            </Box>
          )}

      </VStack>
      
      
    </Box>
    
  );
}

export default SignUpForm;