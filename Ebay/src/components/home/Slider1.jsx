import { FaUserCheck } from "react-icons/fa6";
import Carousel from 'react-bootstrap/esm/Carousel';
import React, { useState } from 'react';

function Slider1() {
    let currentUser = JSON.parse(localStorage.getItem("User_Task_Manager"));
    let loggedUser = currentUser?.id;

    return (
        <div style={{ backgroundColor: '#f7f7f7', padding: '20px', marginTop: '10px' }}>
             <div style={{textAlign:"center"}} className="userName"> <FaUserCheck style={{fontSize:"50px"}}/> {`Welcome, ${currentUser?.first_name} ${currentUser?.last_name}`}!!!</div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className="d-flex align-items-center">
                        <div className="w-30" style={{ marginLeft: "30px", height: "350px", width: "350px", padding: '20px' }}>
                            <h1 style={{ fontFamily: 'Arial', width: "290px" }}>Unique pieces to treasure forever</h1>
                            <p style={{ width: "250px" }}>Iconic bags you’ll love at 15% off with the code LUXDEALS15.</p>
                            <button style={{ display: 'block', margin: '', padding: '7px 20px', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '20px', cursor: 'pointer' }}>Shop Now</button>
                        </div>
                        <div className="w-100 d-flex" style={{ marginTop: "", marginRight: "" }}>
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/socAAOSwUg1l7zC7/s-l400.webp"
                                alt="First slide"
                            />
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/gRAAAOSwr4Rl7zDZ/s-l400.webp"
                                alt="Second slide"
                            />
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/VmgAAOSwO99l7zDl/s-l400.webp"
                                alt="Third slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center">
                        <div className="w-30" style={{ marginLeft: "30px", height: "350px", width: "350px", padding: '20px' }}>
                            <h1 style={{ fontFamily: 'Arial', width: "290px" }}>Your favorite luxury brands for less</h1>
                            <p style={{ width: "250px" }}>Save 15%* with coupon code LUXDEALS15 on special items for...</p>
                            <button style={{ display: 'block', margin: '', padding: '7px 20px', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '20px', cursor: 'pointer' }}>Find your favs</button>
                        </div>
                        <div className="w-100 d-flex" style={{ marginTop: "", marginRight: "" }}>
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/1SwAAOSw9Z9l7yFD/s-l400.webp"
                                alt="Second slide"
                            />
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/iJQAAOSwd2dl8C1Y/s-l400.webp"
                                alt="Second slide"
                            />
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/hAEAAOSwsE1l7yFS/s-l400.webp"
                                alt="Second slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex align-items-center">
                        <div className="w-30" style={{ marginLeft: "30px", height: "350px", width: "350px", padding: '20px' }}>
                            <h1 style={{ fontFamily: 'Arial', width: "290px" }}>On time, and in style</h1>
                            <p style={{ width: "250px" }}>Use LUXDEALS15 to save 15%* on classic designer watches.</p>
                            <button style={{ display: 'block', margin: '', padding: '7px 20px', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '20px', cursor: 'pointer' }}>Shop Now</button>
                        </div>
                        <div className="w-100 d-flex" style={{ marginTop: "", marginRight: "" }}>
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/wecAAOSwGGtl8CZ9/s-l400.webp"
                                alt="Third slide"
                            />
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/OLkAAOSwYShl8CaI/s-l400.webp"
                                alt="Third slide"
                            />
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/LccAAOSwlyJl8CaW/s-l400.webp"
                                alt="Third slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="d-flex align-items-center">
                        <div className="w-30" style={{ marginLeft: "30px", height: "350px", width: "350px", padding: '20px' }}>
                            <h1 style={{ fontFamily: 'Arial', width: "290px" }}>The ultimate luxury accessory</h1>
                            <p style={{ width: "250px" }}>Enjoy 15%* off a huge choice of jewelry using LUXDEALS15</p>
                            <button style={{ display: 'block', margin: '', padding: '7px 20px', backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderRadius: '20px', cursor: 'pointer' }}>Shop and save</button>
                        </div>
                        <div className="w-100 d-flex" style={{ marginTop: "", marginRight: "" }}>
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/YcoAAOSwKo5l8BBA/s-l400.webp"
                                alt="Fourth slide"
                            />
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/B8EAAOSwYhZl8BBP/s-l400.webp"
                                alt="Fourth slide"
                            />
                            <img
                                style={{ width: '300px' }}
                                src="https://i.ebayimg.com/images/g/81sAAOSwppRl8BBo/s-l400.webp"
                                alt="Fourth slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider1;