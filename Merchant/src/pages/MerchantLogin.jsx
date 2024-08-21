import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const MerchantLogin = () => {
  const navigate = useNavigate();
  const [merchantLoginValue, setMerchantLoginValue] = useState({ email: "", password: "" });
  let url = "http://ecommerce.reworkstaging.name.ng/v2";

  const logMerchantIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${url}/merchants/login`, merchantLoginValue);
      console.log("Login response:", res.data);

      if (res.status === 200) {
        if (merchantLoginValue.email && merchantLoginValue.password) {
          setMerchantLoginValue({ email: "", password: "" });
          alert("Login Successful");
          localStorage.setItem("Task_Manager_User", JSON.stringify(res.data));
          navigate('/catform');
        } else {
          alert("Please fill in all the fields before proceeding.");
        }
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error(error, "while submitting form");
      alert("An error occurred while submitting the form. Please try again later.");
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
    <source src= "https://www.shutterstock.com/shutterstock/videos/1108312863/preview/stock-footage-animated-infinite-zoom-out-virtual-background-with-social-networks-connected-together-online.mp4" type="video/mp4"/> 
  </video>

      <form onSubmit={logMerchantIn} style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h4 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}> Enter Your Email And Password To Continue</h4>
        <div className='mb-2' style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email **</label>
          <input type="email" name="email" className='form-control' placeholder='george@gmail.com'
            value={merchantLoginValue.email}
            onChange={e => setMerchantLoginValue({ ...merchantLoginValue, email: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <div className='mb-2' style={{ marginBottom: '20px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password **</label>
          <input type="password" name="password" className='form-control' placeholder='Input your password'
            value={merchantLoginValue.password}
            onChange={e => setMerchantLoginValue({ ...merchantLoginValue, password: e.target.value })}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </div>
        <button className='btn btn-success m-2' style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          fontSize: '1em',
          fontWeight: 'bold'
        }}>Login</button>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <span>Haven't signed up? Kindly <Link to="/createmerchant" style={{ color: 'blue', textDecoration: 'underline' }}>Register</Link></span>
        </div>
      </form>
    </div>
  );
};

export default MerchantLogin;
