import { Box, Button } from '@chakra-ui/react';
import react, { useState } from 'react';
import { DELETE_PRODUCT } from '../graphql/mutation';
import { useMutation } from '@apollo/client';

// it recieve products and onclose as props.
const ProductDetailsModal = ( { product, onClose}) => {

  // State for tracking whether the component is in edit mode.
  const [isEditMode, setIsEditMode] = useState(false);

  // state for storing the product details that may be updated.
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [deleteProduct, { loading: deleteLoading, error: deleteError }] = useMutation(DELETE_PRODUCT);

  // function to handle updating the product
  const handleUpdate = () => {
    // TODO: send the updated product to my API
    // after updating, swtich back to view mode.
    setIsEditMode(false);
  };

  const handleDelete = async() => {
    try {
      await deleteProduct({ variables: { deleteProductId: product.id } });
      window.location.reload();
      onClose();

    }catch (error) {
      console.error("Failed to delete product:", error);
    }
  };
  

  // Render method of the component.
  return (
    <Box className='modal'>
      {!isEditMode ? (
        <>
          <Button onClick={() =>setIsEditMode(true)}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </>
      ):(
        <>
          <input value={updatedProduct.name} onChange={e => setUpdatedProduct({...updatedProduct, name: e.target.value})} />
          <input value={updatedProduct.price} onChange={e => setUpdatedProduct({...updatedProduct, price: e.target.value})} />
          <button onClick={handleUpdate}>Save</button>
        </>
      )};
      <button onClick={onClose}>Close</button>
    </Box>

  );
};

export default ProductDetailsModal;