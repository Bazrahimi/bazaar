// Import React and the useState hook from 'react' library
import React, { useState } from 'react';
// import useMutation hook from from Apollo client to perform mutations
import { useMutation } from '@apollo/client';
// Import the CREATE_USER mutation from our defined Graphql mutations
import { CREATE_USER } from '../graphql/mutation';

// Define the Signup functional component
function Signup() {
  // Define a state for form data using the useState hook
  const [formData, setFormData ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    address: '',
    contactNumber: '',

  });

  // Use the useMutation hook to get the createUse function for executing the mutation
  const [createUser] = useMutation(CREATE_USER);

  // Define the handleChange function to handle form input change
  const handleChange = (e) => {
    // Destructure name and value properties from the event target (input element)
    const { name, value } = e.target;
    // Update the formData state using setFormData
    setFormData(prev => ({...prev, [name]: value }));
  };

  // Define the handleSubmit function to handle form submission
  const handleSubmit = async (e) => {
    // prevent the default form submission behavour
    e.preventDefault();
    try {
      // Try to create a user using the createUser function with form data as variables
      await createUser({ variables: formData });
      // if successful, show an alert
      alert('User created succesfully');
    } catch (error) {
      alert(error.message);
    }
  };

  // Return JSX for rendering the Signup form
  return (
      // Define a form element with the handleSubmit function as its onSubmit handler
      <form onSubmit={handleSubmit}>
        {/* // Input fields for user details with appropriate name attributes, placeholders, and value bindings */}
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <input type="text" name="role" placeholder="Role (e.g. user, admin)" value={formData.role} onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        <input type="text" name="contactNumber" placeholder="Contact Number" value={formData.contactNumber} onChange={handleChange} />
        {/* // Submit button for the form */}
        <button type="submit">Sign Up</button>
    </form>

  );
}

export default Signup;