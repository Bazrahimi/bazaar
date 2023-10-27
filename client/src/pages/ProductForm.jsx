// Importing necessary React hooks, the Apollo Client, and Chakra UI components.
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  Box,
  Button,
  Input,
  Select,
  FormControl,
  FormLabel,
  VStack,
  HStack,
  useBreakpointValue,
  useMediaQuery,
  Stack,
  Flex
} from '@chakra-ui/react';

// Importing the GraphQL mutation for creating a product.
import { PRODUCT_LISTING } from '../graphql/mutation';
import UploadWidget from '../component/Cloudinary';
import QuillEditor from '../component/QuillEditor';



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
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

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
    <Box w="100%" p={4} display="flex" justifyContent="center" onSubmit={handleSubmit}>
      <VStack
        as="form"
        width={['100%', '85%', '75%', '60%']}
        spacing={4}
        p={isLargerThan480 ? 4 : 2}
        shadow="md"
        borderWidth="2px"
        borderRadius="lg"
      >
        <Stack direction={{ base: 'column', md: 'row' }} spacing={[2, 4, 6]}>
          <FormControl id="name" flex={1}>
            <FormLabel>Product Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
            />
          </FormControl>

          <FormControl id="category" flex={1}>
            <FormLabel>Product Category</FormLabel>
            <Select 
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="" disabled>Category</option>
              <option value="Electronic">Electronic</option>
              <option value="Fashion">Fashion</option>
              <option value="Home and Garden">Home and Garden</option>
              <option value="Book">Book</option>
            </Select>
          </FormControl>

          <FormControl id="price" flex={1}>
            <FormLabel>Product Price</FormLabel>
            <Input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
            />
          </FormControl>

          <FormControl id="stock" flex={1}>
            <FormLabel>Available Stock</FormLabel>
            <Input
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Stock"
            />
          </FormControl>
        </Stack>

        <FormControl id="sellerId">
          <FormLabel>Seller ID</FormLabel>
          <Input
            name="sellerId"
            value={formData.sellerId}
            onChange={handleChange}
            placeholder="Seller ID"
          />
        </FormControl>

        <FormControl id="description" mt={6}>
          <FormLabel>Description</FormLabel>
          <QuillEditor
            onChange={(newDescription) => {
              setFormData((prevData) =>({
                ...prevData,
                description: newDescription
              }));
            }}
          />
        </FormControl>

        <Box mt={4}>
          <UploadWidget formData={formData} setFormData={setFormData} />
        </Box>

        <Flex mt={4} justifyContent="center" width="100%">
          <Button colorScheme="teal" type="submit" width={["100%", "auto"]}>
            Create Product
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
}

export default ProductForm;
