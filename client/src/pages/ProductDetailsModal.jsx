import React, { useState } from 'react';

const ProductDetailsModal = ({ product, onClose }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const handleUpdate = () => {
        // Update the product using API or any state management logic
        setIsEditMode(false);
    };

    const handleDelete = () => {
        // Delete the product using API or any state management logic
        onClose(); // Close the modal after delete
    };

    return (
        <div className="modal">
            {!isEditMode ? (
                <>
                    <h2>{product.name}</h2>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => setIsEditMode(true)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </>
            ) : (
                <>
                    <input value={updatedProduct.name} onChange={e => setUpdatedProduct({...updatedProduct, name: e.target.value})} />
                    <input value={updatedProduct.price} onChange={e => setUpdatedProduct({...updatedProduct, price: e.target.value})} />
                    <button onClick={handleUpdate}>Save</button>
                </>
            )}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ProductDetailsModal;
