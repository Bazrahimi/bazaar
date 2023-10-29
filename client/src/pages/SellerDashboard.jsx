// pages/SellerDashboard.jsx
import { useParams } from 'react-router-dom';

import React from 'react';

const SellerDashboard = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Welcome to the Seller Dashboard</h1>
            {/* You can add more content or components here */}
        </div>
    );
};

export default SellerDashboard;
