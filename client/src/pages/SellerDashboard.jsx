import React, { useState} from 'react';
import { useParams, Link } from 'react-router-dom';

import UserDetails from '../component/UserDetails';
import { Box, Button } from '@chakra-ui/react';
import ProductsBySeller from '../pages/ProductsBySeller'




const SellerDashboard = () => {
    const { id } = useParams();

    const [showProducts, setShowProducts] = useState(false);

    return (
        <Box>
            <UserDetails userId={id} />
            <Link to={`/ProductForm/${id}`}>
                <Button>List your Products</Button>
            </Link>

            <Button onClick={() => setShowProducts(!showProducts)}>My Listed Products</Button>
            {showProducts && <ProductsBySeller sellerId={id} />}


            
        </Box>
    );
};

export default SellerDashboard;
