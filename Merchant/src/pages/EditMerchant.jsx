import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditMerchant = ({ merchant_id }) => {
  const id = JSON.parse(localStorage.getItem("Task_Manager_User")).id;
  const [merchant, setMerchant] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMerchant({
      ...merchant,
      [name]: value
    });
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setMerchant({
      ...merchant,
      social_media: {
        ...merchant.social_media,
        [name]: value
      }
    });
  };

  const handlePhonesChange = (e, index) => {
    const { value } = e.target;
    const newPhones = [...merchant.phones];
    newPhones[index] = value;
    setMerchant({
      ...merchant,
      phones: newPhones
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://ecommerce.reworkstaging.name.ng/v2/merchants?merchant_id=${id}`);
      console.log('Merchant updated successfully:', res.data);
      setMerchant(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const labelStyle = {
    display: 'block',
    margin: '10px 0 5px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    alignSelf: 'center'
  };

  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fHww')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  };

  const twoColumnStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px'
  };

  const columnStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  return (
    <div style={backgroundStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
      <h4 style={{ textAlign: "center", fontFamily:"serif" }}>Kindly Fill This Form To Update Your Data</h4>
        <div style={twoColumnStyle}>
          <div style={columnStyle}>
            <label htmlFor="first_name" style={labelStyle}>First Name:</label>
            <input type="text" name="first_name" value={merchant.first_name} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="last_name" style={labelStyle}>Last Name:</label>
            <input type="text" name="last_name" value={merchant.last_name} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input type="email" name="email" value={merchant.email} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="phone" style={labelStyle}>Phone:</label>
            <input type="text" name="phone" value={merchant.phone} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="store_name" style={labelStyle}>Store Name:</label>
            <input type="text" name="store_name" value={merchant.store_name} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="descp" style={labelStyle}>Description:</label>
            <input type="text" name="descp" value={merchant.descp} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="phones" style={labelStyle}>Phones:</label>
            <input type="text" name={`phones`} value={merchant.phones} onChange={handleInputChange} style={inputStyle} />
          </div>

          <div style={columnStyle}>
            <label htmlFor="icon" style={labelStyle}>Icon:</label>
            <input type="file" name="icon" value={merchant.icon} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="banner" style={labelStyle}>Banner:</label>
            <input type="file" name="banner" value={merchant.banner} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="state" style={labelStyle}>State:</label>
            <input type="text" name="state" value={merchant.state} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="district" style={labelStyle}>District:</label>
            <input type="text" name="district" value={merchant.district} onChange={handleInputChange} style={inputStyle} />

            <label htmlFor="x" style={labelStyle}>X:</label>
            <input type="text" name="x" value={merchant.social_media.x} onChange={handleSocialMediaChange} style={inputStyle} />

            <label htmlFor="face_book" style={labelStyle}>Facebook:</label>
            <input type="text" name="face_book" value={merchant.social_media.face_book} onChange={handleSocialMediaChange} style={inputStyle} />

            <label htmlFor="instagram" style={labelStyle}>Instagram:</label>
            <input type="text" name="instagram" value={merchant.social_media.instagram} onChange={handleSocialMediaChange} style={inputStyle} />
          </div>
        </div>

        <button type="submit" style={buttonStyle}>Update</button>
      </form>
    </div>
  );
};

export default EditMerchant;
