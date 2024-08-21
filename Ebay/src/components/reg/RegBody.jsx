import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import Footersign from "../sign/Footersign";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Link from "react-router-dom"


const RegBody = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: ""
    });

    const createUser = async () => {
        try {
            const response = await axios.post('http://ecommerce.reworkstaging.name.ng/v2/users', formData);
            console.log(`User created:`,  response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (formData.first_name.trim() === "") {
            newErrors.first_name = "First name is required";
        }
        if (formData.last_name.trim() === "") {
            newErrors.last_name = "Last name is required";
        }
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (formData.phone.trim() === "") {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{11}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        if (formData.password.trim() === "") {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters long";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            createUser(formData);
            navigate("/signin")
        }
    };

    return (
        <div className="regBodyContainer">
            <div className="regContainer2Flex">
                <div className="regBodyLeft">
                    <img src="https://ir.ebaystatic.com/cr/v/c01/buyer_dweb_individual.jpg" alt="" />
                </div>
                <div className="regBodyRight">
                    <h2>Create an account</h2>
                    <div className="business-personalContainer">
                        <label className="PersonalBtn">Personal</label>
                        <label className="BusinessBtn">Business</label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="overall-dflex">
                            <div>
                                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First name" />
                                {errors.first_name && <div className="error">{errors.first_name}</div>}
                            </div>
                            <div>
                                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last name" />
                                {errors.last_name && <div className="error">{errors.last_name}</div>}
                            </div>
                        </div>
                        <div className="emailContainer">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                            {errors.email && <div className="error">{errors.email}</div>}
                        </div>
                        <div className="emailContainer">
                            <input type="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="080xxxxxxxx" />
                            {errors.phone && <div className="error">{errors.phone}</div>}
                        </div>
                        <div className="passwordContainer">
                            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                            {errors.password && <div className="error">{errors.password}</div>}
                        </div>
                        <div className="spanContainer">
                            <span className="span">By selecting <strong>Create personal account</strong>, you agree to our <a href="#"> User Agreement</a><br />and acknowledge reading our <a href="#">User Privacy Notice.</a></span>
                        </div>
                        <div className="createPersonal">
                            <button type="submit" className="createPersonalBtn"><strong>Create personal account</strong></button>
                        </div>
                    </form>
                    <div className="lineContainer">
                        <div className="line1"></div>
                        <div className="or">or continue with</div>
                        <div className="line2"></div>
                    </div>
                    <div className="regLastPart">
                        <div className="Containergoogle">
                            <button className="button-google">
                                <div style={{ marginLeft: "10px" }}> <FcGoogle className="icon-google" /></div>
                                <div style={{ marginRight: "10px" }}> <span>Google</span></div>
                            </button>
                        </div>
                        <div className="Containerfacebook">
                            <button className="button-facebook">
                                <div><span><FaSquareFacebook className="icon-facebook" /></span></div>
                                <div style={{ marginRight: "10px" }}><span>Facebook</span></div>
                            </button>
                        </div>
                        <div className="Containerapple">
                            <button className="button-apple">
                                <div> <BsApple className="icon-apple" /></div>
                                <div style={{ marginRight: "10px" }}><span>Apple</span></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footersign />
        </div>
    )
}

export default RegBody;