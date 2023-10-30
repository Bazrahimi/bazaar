import React from 'react';
import { useParams, Link } from 'react-router-dom';

import UserDetails from '../component/UserDetails';


const SellerDashboard = () => {
    const { id } = useParams();
    return (
        <div>
            <UserDetails userId={id} />
            
        </div>
    );
};

export default SellerDashboard;
