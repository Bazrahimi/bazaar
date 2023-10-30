import React from 'react';
import { useParams, Link } from 'react-router-dom';

import UserDetails from '../component/UserDetails';
import { Button } from '@chakra-ui/react';



const SellerDashboard = () => {
    const { id } = useParams();
    return (
        <div>
            <UserDetails userId={id} />
            <Link to={`/ProductForm/${id}`}>
                <Button>List your Products</Button>
            </Link>

            
        </div>
    );
};

export default SellerDashboard;
