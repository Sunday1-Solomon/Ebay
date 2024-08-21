
// MerchantSection.js
import { Axios } from 'axios';
import React, { useState } from 'react';

const MerchantSection = () => {
    const [newMerchant, setNewMerchant] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        store_name: '',
        descp: '',
        icon: '',
        banner: '',
        state: '',
        district: '',
        social_media: {
            x: '',
            face_book: '',
            instagram: ''
        },
        phones: []
    });

    const createMerchant = () => {
        // Implement the API call to create a new merchant
        Axios.POST ("http://ecommerce.reworkstaging.name.ng/v2/merchants")
        console.log('Creating a new merchant...');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMerchant({ ...newMerchant, [name]: value });
    };

    const [merchantData, setMerchantData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'ap@gmail.com',
        phone: '0901234567',
        storeName: 'Nicolas Aluminium',
        descp: 'All is well that ends well',
        icon: '',
        banner: '',
        state: '',
        district: '',
        socialMedia: {
            x: '',
            faceBook: '',
            instagram: ''
        },
        phones: [98767887, 98657654]
    });

    const updateMerchantInfo = () => {
        // Implement the API call to update merchant information
        console.log('Updating merchant information...');
    };

    const changePassword = () => {
        // Implement the API call to change password
        console.log('Changing password...');
    };

    return (
        <div className="merchant-section">
            <h2>Create New Merchant</h2>
            <form>
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />
                <label>First Name:</label>
                <input type="text" name="first_name" value={newMerchant.first_name} onChange={handleChange} />

                {/* Add more input fields for other merchant details */}

                <button type="button" onClick={createMerchant}>Create Merchant</button>
            </form>
        </div>
    );
};

export default MerchantSection;
