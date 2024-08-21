import React, { useState } from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Bodysign = () => {
  const navigate = useNavigate();

  const [userLoginValue, setUserLoginValue] = useState({
    email: "",
    password: ""
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!userLoginValue.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    }

    if (!userLoginValue.password.trim()) {
      errors.password = "Password is required";
    } else if (!/\S+@\S+\.\S+/.test(userLoginValue.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const loginUser = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const res = await axios.post(`http://ecommerce.reworkstaging.name.ng/v2/users/login`, userLoginValue);
      console.log("User Login response:", res.data);

      if (res.data.code === 404) {
        alert(res.data.msg);
      } else {
        localStorage.setItem("User_Task_Manager", JSON.stringify(res.data));
        alert("Login Successful");
        navigate("/shop");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const containerStyle = {
    backgroundImage: `url("https://images.pexels.com/photos/21404294/pexels-photo-21404294/free-photo-of-a-building-with-graffiti-on-it-and-a-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    color: "#fff",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)"
  };

  const formContainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "10px",
    padding: "20px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    color: "#333"
  };

  const inputContainerStyle = {
    margin: "10px 0",
    textAlign: "left"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%"
  };

  const continueButtonStyle = {
    ...buttonStyle,
    marginTop: "20px"
  };

  const socialButtonStyle = {
    ...buttonStyle,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px"
  };

  const iconStyle = {
    marginRight: "10px"
  };

  const orContainerStyle = {
    display: "flex",
    alignItems: "center",
    margin: "20px 0"
  };

  const lineStyle = {
    flexGrow: 1,
    height: "1px",
    backgroundColor: "#ccc"
  };

  const checkBoxContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px"
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h1 style={{ marginBottom: "20px" }}>Hello</h1>
        <p>Sign in to eBay or <Link to="/reg" style={{ color: "#007bff" }}>create an account.</Link></p>
        <div style={inputContainerStyle}>
          <input type="text" name="email" placeholder="Email" value={userLoginValue.email} onChange={e => setUserLoginValue({ ...userLoginValue, email: e.target.value })} style={inputStyle} />
          {formErrors.email && <p style={{ color: "red" }}>{formErrors.email}</p>}
        </div>
        <div style={inputContainerStyle}>
          <input type="password" name="password" placeholder="Password" value={userLoginValue.password} onChange={e => setUserLoginValue({ ...userLoginValue, password: e.target.value })} style={inputStyle} />
          {formErrors.password && <p style={{ color: "red" }}>{formErrors.password}</p>}
        </div>
        <button type="submit" style={continueButtonStyle} onClick={loginUser}>Continue</button>
        <div style={orContainerStyle}>
          <div style={lineStyle}></div>
          <span style={{ margin: "0 10px" }}>or</span>
          <div style={lineStyle}></div>
        </div>
        <button style={socialButtonStyle}>
          <FaSquareFacebook style={iconStyle} />
          <span>Continue with Facebook</span>
        </button>
        <button style={socialButtonStyle}>
          <FcGoogle style={iconStyle} />
          <span>Continue with Google</span>
        </button>
        <button style={socialButtonStyle}>
          <BsApple style={iconStyle} />
          <span>Continue with Apple</span>
        </button>
        <div style={checkBoxContainerStyle}>
          <div>
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember" style={{ marginLeft: "10px" }}>Stay signed in</label>
            <p style={{ margin: "10px 0 0 0" }}>Using a public or shared device?</p>
          </div>
          <div>
            <p style={{ margin: "10px 0 0 0" }}>Uncheck to protect your account.</p>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <a href="#" style={{ color: "#007bff" }}>
            Learn More <MdKeyboardArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bodysign;
