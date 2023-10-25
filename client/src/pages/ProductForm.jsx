// Importing necessary React hooks, the Apollo Client, and Chakra UI components.
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Input,
  Textarea,
  Select,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

// Importing the GraphQL mutation for creating a product.
import { PRODUCT_LISTING } from '../graphql/mutation';
import UploadWidget from '../component/Cloudinary';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    imageUrls: "",
    price: "",
    stock: "",
    sellerId: ""
  });

  const [createProduct] = useMutation(PRODUCT_LISTING);

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
      const variables = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        imageURLs: formData.imageUrls.split(',').map(url => url.trim())
      };
      const { data } = await createProduct({ variables });
      console.log("Product created", data.createProduct);
    } catch (error) {
      console.error("Error creating product:", error.message);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} shadow="md" borderWidth="5px">
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </FormControl>

      <FormControl id="description" mt={4}>
        <FormLabel>Description</FormLabel>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
      </FormControl>

      <FormControl id="category" mt={4}>
        <FormLabel>Category</FormLabel>
        <Select 
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="" disabled>Select a category</option>
          <option value="Electronic">Electronic</option>
          <option value="Fashion">Fashion</option>
          <option value="Home and Garden">Home and Garden</option>
          <option value="Book">Book</option>
        </Select>
      </FormControl>

      <FormControl id="price" mt={4}>
        <FormLabel>Price</FormLabel>
        <Input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
      </FormControl>

      <FormControl id="stock" mt={4}>
        <FormLabel>Stock</FormLabel>
        <Input
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Stock"
        />
      </FormControl>

      <FormControl id="sellerId" mt={4}>
        <FormLabel>Seller ID</FormLabel>
        <Input
          name="sellerId"
          value={formData.sellerId}
          onChange={handleChange}
          placeholder="Seller ID"
        />
      </FormControl>

      <Box mt={4}>
        <UploadWidget formData={formData} setFormData={setFormData} />
      </Box>

      <Button mt={4} colorScheme="teal" type="submit">
        Create Product
      </Button>
    </Box>
  );
}

export default ProductForm;
