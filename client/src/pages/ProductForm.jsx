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
  useMediaQuery,
  Stack,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure

} from '@chakra-ui/react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

// Importing the GraphQL mutation for creating a product.
import { PRODUCT_LISTING } from '../graphql/mutation';
import UploadWidget from '../component/Cloudinary';
import QuillEditor from '../component/QuillEditor';



const ProductForm = () => {
  const { userId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [newProductId, setNewProductId] = useState(null);

  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    imageUrls: "",
    price: "",
    stock: "",
    sellerId: userId
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
          sellerId: formData.sellerId,
        
          imageURLs: formData.imageUrls.split(',').map(url => url.trim())
          
        };
        const { data } = await createProduct({ variables });
        console.log("Product created", data.createProduct);
      // Store the product ID
      setNewProductId(data.createProduct.id);
      console.log("this is productid" + data.createProduct.id)
        onOpen();
      } catch (error) {
        console.error("Error creating product:", error.message);
      }
    

  };

  const handleListMore = () => {

    window.location.reload();
   
  };
  const handleNavigateToProduct = () => {
    navigate(`/product/${newProductId}`);
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

          <FormControl id="name" flex={1}>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
            />
          </FormControl>

          <FormControl id="category" flex={1}>
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
            <Input
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
            />
          </FormControl>

          <FormControl id="stock" flex={1}>
            <Input
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Available Stock"
            />
          </FormControl>
      
        
        <FormControl id="description" mt={6}>
          <FormLabel>Product Description</FormLabel>
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

        <Flex mt={1} justifyContent="center" width="100%">
          <Button colorScheme="teal" type="submit" width={["100%", "auto"]}>
            Create Product
          </Button>
        </Flex>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Product Listed</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            You have successfully listed your product.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={handleListMore}>
              List More Products
            </Button>
            <Button colorScheme="teal" onClick={(event) => {
  event.stopPropagation();
  handleNavigateToProduct();
}}>
  Navigate to Product
</Button>

          </ModalFooter>
        </ModalContent>
      </Modal>

    </Box>

  
  );
}

export default ProductForm;
