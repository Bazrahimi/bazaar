// importing necessary React hooks and the Apollo Client
import React, { useState} from 'react';
import { useMutation } from '@apollo/client';

// importing the graphql mutation for creating a product
import { PRODUCT_LISTING } from '../graphql/mutation';
import UploadWidget from '../component/Cloudinary';

const ProductForm = () => {
  // starting form data state using react's useState
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    catetegory: "",
    imageUrls: "",
    price: "",
    stock: "",
    sellerId: ""
  });

  // Using Appollo's useMutation hook to execute the create product mutation
  const [createProduct] = useMutation(PRODUCT_LISTING);

  // Function to handle input changes and update the form data state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData, // Spreading previous data
      [name]: value // overwriting the change input 
    }));
  };

  // function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Preparing variable for mutation, including parsing and splitting image URLs.
      const variables = {
        ...formData, 
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        imageURLs: formData.imageUrls.split(',').map(url => url.trim())
      };
      // Executing the create product mutation
      const { data } = await createProduct({ variables });
      console.log("Product created", data.createProduct)

    } catch (error) {
      console.error("Error creating products", error.message);
    }
  };

  // JSX for rendering the form
  // JSX for rendering the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Input for product name */}
      <input 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" 
      />
      {/* Textarea for product description */}
      <textarea 
        name="description" 
        value={formData.description} 
        onChange={handleChange} 
        placeholder="Description" 
      />
      <select 
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="" disabled>Select a category</option>
        <option value="Electronic">Electronic</option>
        <option value="Fashion">Fashion</option>
        <option value="Home and Garden">Home and Garden</option>
        <option value="Book">Book</option>
      </select>

      {/* Input for product price */}
      <input 
        name="price" 
        type="number" 
        value={formData.price} 
        onChange={handleChange} 
        placeholder="Price" 
      />
      {/* Input for product stock */}
      <input 
        name="stock" 
        type="number" 
        value={formData.stock} 
        onChange={handleChange} 
        placeholder="Stock" 
      />
      {/* Input for seller ID */}
      <input 
        name="sellerId" 
        value={formData.sellerId} 
        onChange={handleChange} 
        placeholder="Seller ID" 
      />

      <UploadWidget formData={formData} setFormData={setFormData} />

     

      {/* Button to submit the form */}
      <button type="submit">Create Product</button>
    </form>
  );
}

// Exporting the component for use in other parts of the application
export default ProductForm;






