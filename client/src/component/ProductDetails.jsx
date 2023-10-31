import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PRODUCTS_BY_ID } from "../graphql/queries";
import {Box, Select, Flex, Text, Button, Image, VStack, Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { PRODUCT_VIEW_COUNT } from "../graphql/mutation";
import React, { useEffect } from 'react';
import DOMPurify from "dompurify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from '../context/cartContext';
import AuthService from '../utils/auth';


const ProductDetails = () => {
  // Hooks should be at the top level and shouldn't be used conditionally
  const { productId } = useParams();

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_ID, { variables: { getProductsById: productId } });
  const [incrementProductViewCount] = useMutation(PRODUCT_VIEW_COUNT);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = React.useState(null);
  const { addToCart } = useCart();

  // state to maintain selected quantity, pick 1 by default
  const [selectedQuantity, setSelectedQuantity] = React.useState(1);

  useEffect(() => {
    if (productId) {
      incrementProductViewCount({ variables: { incrementProductViewCountId: productId } });
    }
  }, [productId, incrementProductViewCount]);

  // Handling loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Destructuring product details from data
  const { category, createdAt, description, id, imageURLs, name, price, stock, seller } = data.getProductsById;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  const token = AuthService.getToken();
  const user = AuthService.getUser();

;
  const handleQuantityChange = (e) => {
    setSelectedQuantity(Number(e.target.value));
  };



  const handleAddToCart = () => {
    const productToAdd = {
      id: id,
      name: name,
      imageUrl: imageURLs[0],
      price: price,
      quantity: selectedQuantity,
      buyerId: user.data._id
    };
    console.log(productToAdd);
    addToCart(productToAdd);
  };

  return (
    <VStack margin="20px" spacing={7} align="start" p={4} boxShadow="xlg" rounded="md">
      <Flex>
        <Box w="500px" mr="40px" mb="40px">
          <Slider {...sliderSettings}>
            {imageURLs.map((url, index) => (
              <Box onClick={() => { setSelectedImage(url); onOpen(); }} key={index}>
                <Image boxSize="500px" src={url} alt={name} cursor="pointer" />
              </Box>
            ))}
          </Slider>
        </Box>

        <Box>
          <Text fontSize="3xl" mb={4}>{name}</Text>
          <Text fontSize="2xl" mb={4}>
            <span style={{ fontSize: "1.5xl", fontWeight: "normal" }}>Price:</span> <span style={{ fontWeight: "bold" }}>${price}</span>
          </Text>
          <Text fontSize="2xl" mb={4}>
            <span style={{ fontSize: "1.5xl", fontWeight: "normal" }}>Available:</span> <span style={{ fontWeight: "bold" }}>{stock}</span>
          </Text>
          <Text fontSize="2xl" mb={4}>
            <span style={{ fontSize: "1.5xl", fontWeight: "normal" }}>Seller's Store:</span> <span style={{ fontWeight: "bold" }}>{seller.firstName} </span>
          </Text>

          {/* Dropdown for quantity selection */}
          <Select placeholder="Select quantity" mb={4} onChange={handleQuantityChange}>
            {[...Array(stock).keys()].map(i => 
              <option value={i+1} key={i+1}>{i+1}</option>
            )}
          </Select>

          {/* Styled button */}
          <Button backgroundColor="teal.500" color="white" _hover={{ backgroundColor: "teal.600" }} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Box>
      </Flex>

      <Box>
        <strong>Description:</strong>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }} 
        />
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xxl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Slider {...sliderSettings} initialSlide={imageURLs.indexOf(selectedImage)}>
            {imageURLs.map((url, index) => (
              <Box key={index}>
                <Image src={url} alt={name} maxW="100%" maxH="80vh" m="auto" />
              </Box>
            ))}
          </Slider>
        </ModalContent>
      </Modal>


    </VStack>
  );
};


export default ProductDetails;
