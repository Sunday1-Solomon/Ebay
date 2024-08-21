import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from 'react-bootstrap/esm/Card';
import Slider from "react-slick";
import Navigation from "../components/header/Navigation";
import Cartfooter from "../components/cart/Cartfooter";
import NavigationAbove from "../components/header/NavigationAbove";
import axios from "axios";


const Shop = () => {
    const merchantInfo = JSON.parse(localStorage.getItem("Task_Manager_User"));
    const merchantId = merchantInfo.id;
    const category = JSON.parse(localStorage.getItem("Product_Category"));
    const categoryId = category.id;
    console.log(`The dynamically derived category id => ${categoryId}`);
    // const categoryId = "6634de7ef7192e0c5d7a673d";
    const [fetchProduct, setFetchProduct] = useState([]);

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        arrow: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToScroll: 1,
        afterChange: function (index) {
            // console.log(
            //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            // );
        }
    };

    const getProduct = async () => {
        try {
            const res = await axios.get(`http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchantId}`);
            console.log("Merchant product successfully gotten:", res.data);
            if (Array.isArray(res.data.data)) {
                setFetchProduct(res.data.data)
            };
        } catch (error) {
            console.error("Error while getting merchant product:", error)
        }
    }

    useEffect(() => {
        getProduct();
    }, [merchantId, categoryId])

    return (
        <div className="ShopContainer">
            <NavigationAbove />
            <Navigation />
            <div className="shop">
                <div className="shopLeft">
                    <h1>Men's Dress Shoes</h1>
                    <div>
                        <h5>Shop by Category</h5>
                        <p className="menShoe">Men's Shoes</p>
                        <div className="shopLeftList">
                            <p>Dress Shoes</p>
                            <div className="shoeListDiv">
                                <a href="#">Athletic Shoes</a>
                                <a href="#">Boots</a>
                                <a href="#">Casual Shoes</a>
                                <a href="#">Sandals</a>
                                <a href="#">Slippers</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shopRight">
                    <div className="shoeTop">
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className="thirdImg">
                                    <p style={{ border: '1px solid ', padding: "10px 30px", marginLeft: "10px", textAlign: "center" }}> 10</p>
                                </div>
                                <div className="thirdImg">
                                    <p style={{ border: '1px solid ', padding: "10px 30px", marginLeft: "10px", textAlign: "center" }}> 9</p>
                                </div>
                                <div className="thirdImg">
                                    <p style={{ border: '1px solid ', padding: "10px 30px", marginLeft: "10px", textAlign: "center" }}> 11</p>
                                </div>
                                <div className="thirdImg">
                                    <p style={{ border: '1px solid ', padding: "10px 30px", marginLeft: "10px", textAlign: "center" }}> 10.5</p>
                                </div>
                                <div className="thirdImg">
                                    <p style={{ border: '1px solid ', padding: "10px 30px", marginLeft: "10px", textAlign: "center" }}> 12</p>
                                </div>
                            </Slider>
                        </div>
                        <h4 style={{ color: "green" }}>Start Shopping Now!!!</h4>
                    </div>

                    <div className="d-grid">
                        {
                            fetchProduct && fetchProduct.map((productFetched, i) => (
                                <Link style={{ textDecoration: "none", marginTop: "50px" }} key={i} to={`/products/${productFetched?.id}`} state={{ product: productFetched }}>
                                    <Card style={{ width: '14rem' }}>
                                        <Card.Img variant="top" src={productFetched.image} alt="Image" style={{width: "100%", height: "250px"}}/>
                                        <Card.Body>
                                            <Card.Title></Card.Title>
                                            <Card.Text>
                                                {productFetched.descp}
                                                <h4>{productFetched.price}</h4>
                                                <p>$20.10 shipping</p>
                                                <p>{productFetched.total_sold} sold</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Cartfooter />
        </div>
    )
}

export default Shop;