import { useNavigate } from 'react-router-dom';

const navigateToProductDetails = () => {
  const navigate = useNavigate();
  
  return (productId) => {
    navigate(`/product/${productId}`);
  };
};

export default navigateToProductDetails;
