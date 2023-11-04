import React from 'react';
import { useCart } from '../context/cartContext';
import {
  VStack,
  Box,
  Image,
  Text,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
} from "@chakra-ui/react";


// Creating a functional component 
const CartPage = () => {
  const { cart: cartItems, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <Text>No Items in the Cart</Text>;
  };

 // Calculating sub-total for each item
  const calculateSubTotal = (quantity, price) => {
      return quantity * price;
    };

  // Calculating the grand total for all items in the cart
  const calculateTotal = cartItems => {
      return cartItems.reduce((acc, item) => acc + calculateSubTotal(item.quantity, item.price), 0);
    };
    
    const calculateGST = cartItems => {
      return cartItems.reduce((acc, item) => acc + (item.price * item.quantity *.10), 0);
    }

   
    // const calculateGrandTotalWithDiscount = cartItems => {
    //   const total = cartItems.reduce(
    //     (acc, item) => acc + calculateSubTotal(item.quantity, item.price),
    //     0
    //   );
    //   return total * 0.01; 
    // };



  
  // if Cart is not empty, render the card items
  return (
    <VStack>
      <Text color="red.500" fontSize="xl" mb={4}>
        These items are NOT for sale and are for educational purposes only.
      </Text>
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>Product Image</Th>
            <Th>Product Name</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Sub-total</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cartItems.map((item) => (
            <Tr key={item.id}>
              <Td>
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  boxSize="100px"
                  borderColor="grey"
                />
              </Td>
              <Td>{item.name}</Td>
              <Td>${item.price}</Td>
              <Td>
                <Input
                  type="number"
                  defaultValue={item.quantity}
                  onChange={(e) => handleQuantityChange(e, item.id)}
                  w="80px"
                />
              </Td>
              <Td>${calculateSubTotal(item.quantity, item.price).toFixed(2)}</Td>
              <Td>
                <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box my={4}>
        <Text fontSize="xl">
          Goods and Services Tax: ${calculateGST(cartItems)}
        </Text>
      </Box >
      <Box my={4}>
        <Text fontSize="xl">
          Total: ${calculateTotal(cartItems).toFixed(2)}
        </Text>
      </Box >

      <Box marginBottom= "30px">
        {/* <Text fontSize="xl" color="green.500">
           Grand Total (after 99% discount): ${calculateGrandTotalWithDiscount(cartItems).toFixed(2)}
        </Text> */}

        <Button colorScheme="teal" size="lg">
           Proceed to Checkout
        </Button>
      </Box>

    </VStack>
  );

}

export default CartPage;