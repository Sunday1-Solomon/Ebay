import React from "react";
import { Link } from "react-router-dom";

const IntroPage = () => {
    return (
        <div style={{
            backgroundImage: `url(https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&w=600)`,
            height: "100vh",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center"
        }}>
            <h1 style={{
                fontSize: "3em",
                textShadow: "2px 2px 4px #000000",
                marginBottom: "20px"
            }}>WELCOME TO EBAY STORE</h1>
            <p style={{
                fontSize: "1.5em",
                fontWeight: "bold",
                textShadow: "1px 1px 3px #000000",
                width: "60%",
                marginBottom: "40px"
            }}>The Best Place To Showcase Your Products To Our Esteemed Customers For Optimum Sales!!</p>
            <div style={{
                padding: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px"
            }}>
                <h4 style={{ marginBottom: "20px" }}>Kindly Click The Button Below To Signup To Continue.</h4>
                <Link style={{
                    border: "1px solid black",
                    padding: "15px 30px",
                    borderRadius: "25px",
                    fontSize: "1.2em",
                    backgroundColor: "green",
                    color: "white",
                    textDecoration: "none",
                    transition: "background-color 0.3s ease"
                }}
                    to="/createmerchant"
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "darkgreen"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "green"}
                >
                    Signup as Merchant
                </Link>
            </div>
        </div>
    );
}

export default IntroPage;
