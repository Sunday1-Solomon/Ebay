import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatingMerchant = () => {
  const [merchantValues, setMerchantValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    store_name: "",
    descp: "",
    icon: "",
    banner: "",
    phones: "",
    password: ""
  });

  const navigate = useNavigate();
  let url = "http://ecommerce.reworkstaging.name.ng/v2";

  const createMerchant = async (e) => {
    e.preventDefault();
    try {
      const iconFormData = new FormData();
      iconFormData.append('id', '233050241'); // 
      iconFormData.append('image', merchantValues.icon);

      const bannerFormData = new FormData();
      bannerFormData.append('id', '233050241');
      bannerFormData.append('image', merchantValues.banner);

      const [iconResponse, bannerResponse] = await Promise.all([
        axios.post('http://bucket.reworkstaging.name.ng/resources', iconFormData),
        axios.post('http://bucket.reworkstaging.name.ng/resources', bannerFormData)
      ]);

      const iconUrl = iconResponse.data.data[0].url;
      const bannerUrl = bannerResponse.data.data[0].url;

      const merchantData = {
        ...merchantValues,
        icon: iconUrl,
        banner: bannerUrl
      };

      const res = await axios.post(`${url}/merchants`, merchantData);
      console.log("API Response:", res.data);
      navigate('/loginmerchant');
    } catch (error) {
      console.error(error, "while submitting form");
    }
  };

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      overflow: "hidden"
    }}>

      <video autoPlay loop muted playsInline style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}>
        <source src="https://www.shutterstock.com/shutterstock/videos/1108312863/preview/stock-footage-animated-infinite-zoom-out-virtual-background-with-social-networks-connected-together-online.mp4" type="video/mp4" />
      </video>

      <div style={{
        paddingTop: "20px",


      }}>

        <form style={{
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '10px',
          marginRight: "200px",
          fontFamily: 'Arial, sans-serif'
        }}
          className='regForm' onSubmit={createMerchant}>
          <h3 style={{ textAlign: 'center', color: "white" }}>Register As Merchant</h3>
          <div style={{ color: 'red', marginBottom: '20px', textAlign: 'center' }}>
            NOTE: Fields with asterisks are mandatory and must be filled.
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
            <div style={{ flex: 1 }}>
              <div className='mb-2'>
                <label htmlFor="first_name">First Name **</label>
                <input type="text" name="first_name" className='form-control' placeholder='Enter first name'
                  value={merchantValues.first_name}
                  onChange={e => setMerchantValues({ ...merchantValues, first_name: e.target.value })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className='mb-2'>
                <label htmlFor="last_name">Last Name **</label>
                <input type="text" name="last_name" className='form-control' placeholder='Enter last name'
                  value={merchantValues.last_name}
                  onChange={e => setMerchantValues({ ...merchantValues, last_name: e.target.value })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className='mb-2'>
                <label htmlFor="email">Email **</label>
                <input type="email" name="email" className='form-control' placeholder='Enter email'
                  value={merchantValues.email}
                  onChange={e => setMerchantValues({ ...merchantValues, email: e.target.value })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className='mb-2'>
                <label htmlFor="phone">Phone **</label>
                <input type="text" name="phone" className='form-control' placeholder='Enter Your Phone Number'
                  value={merchantValues.phone}
                  onChange={e => setMerchantValues({ ...merchantValues, phone: e.target.value })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className='mb-2'>
                <label htmlFor="store_name">Store Name **</label>
                <input type="text" name="store_name" className='form-control' placeholder='Enter store name'
                  value={merchantValues.store_name}
                  onChange={e => setMerchantValues({ ...merchantValues, store_name: e.target.value })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className='mb-2'>
                <label htmlFor="descp">Description **</label>
                <textarea type="text" name="descp" className='form-control' placeholder='Describe your store'
                  value={merchantValues.descp}
                  onChange={e => setMerchantValues({ ...merchantValues, descp: e.target.value })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', height: '80px' }} />
              </div>
              <div className='mb-2'>
                <label htmlFor="icon">Icon</label>
                <input type="file" name="icon" className='form-control'
                  onChange={e => setMerchantValues({ ...merchantValues, icon: e.target.files[0] })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className='mb-2'>
                <label htmlFor="banner">Banner</label>
                <input type="file" name="banner" className='form-control'
                  onChange={e => setMerchantValues({ ...merchantValues, banner: e.target.files[0] })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className='mb-2'>
                <label htmlFor="phones">Phones **</label>
                <input type="text" name="phones" className='form-control' placeholder='Enter Your Other Phone Numbers'
                  value={merchantValues.phones}
                  onChange={e => setMerchantValues({ ...merchantValues, phones: e.target.value })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
              <div className='mb-2'>
                <label htmlFor="password">Password **</label>
                <input type="password" name="password" className='form-control' placeholder='Input your password'
                  value={merchantValues.password}
                  onChange={e => setMerchantValues({ ...merchantValues, password: e.target.value })}
                  style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className='btn btn-success m-3' style={{ padding: '10px 20px', fontSize: '1.2em', borderRadius: '5px', backgroundColor: 'green', color: 'white', border: 'none' }}>Register</button>
            <Link to='/' className='btn btn-primary m-3' style={{ padding: '10px 20px', fontSize: '1.2em', borderRadius: '5px', backgroundColor: 'blue', color: 'white', border: 'none' }}>Back</Link>
          </div>
        </form>
        <p style={{ textAlign: 'center', marginTop: '20px', color: "white" }}>Already registered? Then <Link to='/loginmerchant' style={{ color: 'blue', textDecoration: 'underline' }}>Login</Link></p>
      </div>
    </div>
  );
}

export default CreatingMerchant;
