import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutation.js";



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
    <form onSubmit={handleSubmit}>
      <input 
        name="firstName" 
        value={formData.firstName} 
        onChange={handleChange} 
        placeholder="First Name" 
      />

      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />

      <input 
        type="email"
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
     />

     <input 
        type="password"
        name="password" 
        value={formData.password} 
        onChange={handleChange} 
        placeholder="Password" 
     />

    <select 
      name="role" 
      value={formData.role} 
      onChange={handleChange}
    >
      <option value="" disabled>Select a role</option>
      <option value="seller">Seller</option>
      <option value="buyer">Buyer</option>
      <option value="both">Both</option>
    </select>

    <input 
      name="address" 
      value={formData.address} 
      onChange={handleChange} 
      placeholder="Address" 
    />

    <input 
      name="contactNumber" 
      value={formData.contactNumber} 
      onChange={handleChange} 
      placeholder="Contact Number" 
    />








      <button type="submit">Signup</button>
    </form>
  );
}

export default SignUpForm;
