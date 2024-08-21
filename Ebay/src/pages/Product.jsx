import React, { useRef, useState, useContext, useEffect } from "react";
import axios from "axios";
import { Await, useParams } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaCcPaypal, FaCcVisa, FaCcDiscover } from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";
import Slider from "react-slick";
import { Vortex } from 'react-loader-spinner';
import { SlLike } from "react-icons/sl";
import { FcRating } from "react-icons/fc";
import { LiaCommentAltSolid } from "react-icons/lia";
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import Modal from 'react-bootstrap/esm/Modal';
import Navigation from "../components/header/Navigation";
import NavigationAbove from "../components/header/NavigationAbove";
import Cartfooter from "../components/cart/Cartfooter";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Product = () => {
    const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';
    const navigate = useNavigate();
    const { addToCart, likeData, setLikeData, ratingData, setRatingData, reviewData, setReviewData } = useContext(CartContext);

    const userId = JSON.parse(localStorage.getItem("User_Task_Manager")).id;

    const { productId } = useParams();

    const [singleProduct, setSingleProduct] = useState({});
    const [show, setShow] = useState(false);
    const [likes, setLikes] = useState({ product_id: productId, user_id: userId });
    const [reviews, setReviews] = useState({ product_id: productId, user_id: userId, text: "" });
    const [ratings, setRatings] = useState({ product_id: productId, user_id: userId, text: "", value: "" });
    const [showRatingModal, setShowRatingModal] = useState(false);
    const [productRate, setProductRate] = useState([]);
    const [quantity, setQuantity] = useState("");
    const [quantityError, setQuantityError] = useState("");


    const handleClose = () => {
        setShow(false);
    };

    const handleBuyNow = () => {
        if (quantity === "" || parseFloat(quantity) <= 0) {
            setQuantityError("Please select a quantity of 1 or more");
        } else {
            setQuantityError("");
        }
    };

    const handleCartSubmit = async (e) => {
        e.preventDefault();

        if (quantity === "" || parseFloat(quantity) <= 0) {
            setQuantityError("Please select a quantity of 1 or more");
            return;
        }

        try {
            await addToCart(productId, userId, quantity);
            navigate(`/cart`);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const sliderRef = useRef(null);

    const handleScroll = (e) => {
        if (e.deltaX > 0) {
            sliderRef.current.slickNext();
        } else if (e.deltaX < 0) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        className: "center",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true
    };

    const getSingleProductDetails = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/products/${productId}`);
            console.log("Single product details fetched successfully:", res.data);
            setSingleProduct(res.data);
        } catch (error) {
            console.error("Error while getting product details:", error);
        }
    };

    const createLike = async () => {
        const likeObj = {
            product_id: productId,
            user_id: userId
        };
        try {
            const res = await axios.post(`${BASE_URL}/likes`, likeObj);
            console.log("Like successfully created:", res.data);
            setLikes((prevLike) => prevLike + 1);
            fetchLikeData();
        } catch (error) {
            console.error("Error while toggling like:", error);
        }
    };

    const handleShow = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/reviews`, reviews);
            console.log("Review successfully created:", res.data);
            setShow(false);
            setReviews({ product_id: productId, user_id: userId, text: "" });
            setSingleProduct((prevProduct) => ({ ...prevProduct, review: prevProduct.review + 1 }));
            fetchReviewData();
        } catch (error) {
            console.error("Error while creating review:", error);
        }
    };

    const fetchReviewData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/reviews?product_id=${productId}`);
            setReviewData(response.data);
        } catch (error) {
            console.error('Error fetching review data:', error);
        }
    };

    const fetchRatingData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/ratings?product_id=${productId}`);
            setRatingData(response.data);
        } catch (error) {
            console.error("Error fetching ratings =>", error);
        }
    }

    const fetchLikeData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/likes?product_id=${productId}`);
            setLikeData(response.data);
        } catch (error) {
            console.error("Error fetching likes =>", error);
        }
    }

    useEffect(() => {
        fetchLikeData();
        fetchRatingData();
        fetchReviewData();
    }, [productId]);


    const handleRate = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${BASE_URL}/ratings`, ratings);
            if (res.data.type === 'EXISTS') {
                console.log('User has already made a rating:', res.data.msg);

            } else {
                console.log("Ratings Successfully Created:", res.data);
                setShowRatingModal(false);
                setRatings({ product_id: productId, user_id: userId, text: "", value: "" });
                setSingleProduct((prevProduct) => ({ ...prevProduct, rating: prevProduct.rating + 1 }));
                fetchRatingData();
            }
        } catch (error) {
            console.error("Error while creating ratings:", error);
        }
    };

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/users/reviews?user_id=${userId}`)
            } catch (error) {
                console.error("error while fetching user's review =>", error)
            }
        }
        fetchReview();
    }, [userId])

    const handleShowRatingModal = () => {
        setShowRatingModal(true);
    };

    const handleCloseRatingModal = () => {
        setShowRatingModal(false);
    };

    useEffect(() => {
        getSingleProductDetails();
    }, [productId]);

    if (!singleProduct) {
        return (
            <div style={{ textAlign: "center", marginTop: "150px" }}>
                <Vortex
                    visible={true}
                    height="300"
                    width="300"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
            </div>
        );
    }

    return (
        <div className="productContainer">
            <NavigationAbove />
            <Navigation />

            <div style={{ marginTop: "50px" }} className="product">
                <div className="productLeft">
                    <div className="image">
                        <img src={singleProduct.images} alt="image" />
                        <div style={{ textAlign: "center" }}>
                            <button onClick={createLike} style={{ marginRight: "15px", border: "none" }}><SlLike />{singleProduct.like}</button>
                            <button onClick={handleShowRatingModal} style={{ marginRight: "15px", border: "none" }}> <FcRating />{singleProduct.rating} </button>
                            <button onClick={() => setShow(true)} style={{ marginRight: "15px", border: "none" }}><LiaCommentAltSolid />{singleProduct.review}</button>
                        </div>
                    </div>
                </div>

                <div className="productRight">
                    <h3>{singleProduct.descp}</h3>
                    <div className="siwarelContainer">
                        <div className="siwarel">
                            <img src="https://i.ebayimg.com/images/g/TVcAAOSwKyJl4Njl/s-l64.jpg" alt="" />
                        </div>
                        <div>
                            <div><a style={{ color: "black" }} href="#">siwarel</a></div>
                            <div className="positiveContainer"><a href="#">98.9% positive</a><a className="moveRight" href="#">Seller's other items</a><a className="moveRight" href="#">Contact</a></div>
                            <div><a style={{ color: "#191919" }} href="#">seller</a></div>
                        </div>
                    </div>
                    <div>
                        <h2>NGN {singleProduct.price}</h2>
                        <div className="condition">
                            <p>Condition:</p>
                            <strong><p>New with box</p></strong>
                        </div>
                        {/* <div className="sizeDiv">
                            <p>Size Type:</p>
                            <select className="selectSize" name="size" value={size} onChange={(e) => setSize(e.target.value)}>
                                <option value="size">-Select-</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                            </select>
                        </div>
                        {sizeError && <p className="error">{sizeError}</p>}
                        <div className="colorDiv">
                            <p>Color:</p>
                            <select className="selectColor" name="color" value={color} onChange={(e) => setColor(e.target.value)}>
                                <option value="color">-Select-</option>
                                <option value="Red">Red</option>
                                <option value="Blue">Blue</option>
                                <option value="Black">Black</option>
                            </select>
                        </div>
                        {colorError && <p className="error">{colorError}</p>} */}
                        <div className="quantityDiv">
                            <p>Quantity:</p>
                            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </div>
                        {quantityError && <p className="error">{quantityError}</p>}
                        <div style={{ marginTop: "20px" }}>
                            <Button className="buyNowButton" onClick={handleBuyNow}>Buy Now</Button>
                            <Button style={{ marginLeft: "20px" }} onClick={handleCartSubmit} type="submit" className="cartSubmitButton">Add to Cart</Button>

                        </div>
                    </div>
                </div>
            </div>

            <section>
                <h3>Reviews</h3>
                {reviewData.length > 0 ? (
                    reviewData.map((review) => (
                        <div key={review.id}>
                            <div style={{ display: "flex", gap: "5px" }}>
                                <img src={singleProduct.images} style={{ width: "50px", height: "50px" }} alt="" />
                                <p><a style={{ textDecoration: "none" }} href="">{review.user.first_name} {review.user.last_name}</a></p>
                                <p>{review.text}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No reviews available.</p>
                )}
            </section>
            <section>
                <h3>Ratings</h3>
                {ratingData?.length > 0 ? (
                    ratingData?.map((rating) => (
                        <div key={rating.id}>
                            <img src={singleProduct.images} style={{ width: "50px", height: "50px" }} alt="" />
                            <p>Rating Value: {rating.value}</p>
                            <p>Rating Text: {rating.text}</p>
                        </div>
                    ))
                ) : (
                    <p>No ratings available.</p>
                )}
            </section>

            <section>
                <h3>Likes</h3>
                {likeData.length > 0 ? (
                    likeData.map((like) => (
                        <div key={like.id}>
                            <img src={singleProduct.images} style={{ width: "50px", height: "50px" }} alt="" />
                            <p>{like.user.first_name} {like.user.last_name}</p>
                        </div>
                    ))
                ) : (
                    <p>No likes available.</p>
                )}
            </section>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Leave a review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleShow}>
                        <Form.Group controlId="reviewText">
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={reviews.text}
                                onChange={(e) => setReviews({ ...reviews, text: e.target.value })}
                                placeholder="Write your review here"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={showRatingModal} onHide={handleCloseRatingModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Leave a rating</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleRate}>
                        <Form.Group controlId="ratingValue">
                            <Form.Label>Rating Value</Form.Label>
                            <Form.Control
                                as="select"
                                value={ratings.value}
                                onChange={(e) => setRatings({ ...ratings, value: e.target.value })}
                            >
                                <option value="">-Select-</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="ratingText">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={ratings.text}
                                onChange={(e) => setRatings({ ...ratings, text: e.target.value })}
                                placeholder="Write your comment here"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            <Cartfooter />
        </div>
    );
};

export default Product;
