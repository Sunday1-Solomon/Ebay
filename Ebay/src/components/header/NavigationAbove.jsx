import React, { useContext } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { GoBell } from "react-icons/go";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const NavigationAbove = () => {
    const { cartItems = [] } = useContext(CartContext); // Default to an empty array if cartItems is undefined
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav className="navbar navbar-expand-lg p-0">
            <div className="container-fluid">
                <p className="Hi">
                    Hi! <Link to="/signin">Sign in</Link> or <Link to="/reg">Register</Link>
                </p>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Daily Deals
                            </a>
                        </li>
                        <li className="nav-item">
                            <div style={{ marginTop: "8px" }}>
                                <Link to="/user">User Profile</Link>
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navUp">
                        <li style={{ marginTop: "-8px" }} className="nav-item nav-itemRight">
                            <a className="nav-link active" aria-current="page" href="#">
                                Ship to
                            </a>
                        </li>
                        <li style={{ marginTop: "-8px" }} className="nav-item nav-itemRight">
                            <a className="nav-link active" aria-current="page" href="#">
                                Sell
                            </a>
                        </li>
                        <li style={{ marginTop: "-8px" }} className="nav-item nav-itemRight">
                            <a className="nav-link active" aria-current="page" href="#">
                                Watchlists <RiArrowDownSLine />
                            </a>
                        </li>
                        <li className="nav-item">
                            <div style={{ marginTop: "-10px" }} className="dropdown">
                                <button style={{ fontSize: "12.5px" }} className="dropbtn">
                                    My eBay <RiArrowDownSLine />
                                </button>
                                <div className="dropdown-content">
                                    <a href="#">Summary</a>
                                    <a href="#">Recently Viewed</a>
                                    <a href="#">Bids/Offers</a>
                                    <a href="#">Watchlists</a>
                                    <a href="#">Purchase History</a>
                                    <a href="#">Buy Again</a>
                                    <a href="#">Selling</a>
                                    <a href="#">Saved Searches</a>
                                    <a href="#">Saved Sellers</a>
                                    <a href="#">Messages</a>
                                </div>
                            </div>

                            <div style={{ marginTop: "-45px", marginLeft: "88px" }} className="dropdownBell">
                                <button className="dropbtnBell">
                                    <GoBell className="bellImg" />
                                </button>
                                <div className="dropdown-contentBell">
                                    <Link to="/signin">Please, sign in to view notifications.</Link>
                                </div>
                            </div>

                            <div style={{ marginTop: "-35px", marginLeft: "90px" }} className="dropdownCart">
                                <Link style={{ color: "black", position: "relative" }} to={`/cart`}>
                                    <span className="cart-icon">
                                        🛒
                                        {totalQuantity > 0 && <span className="cart-quantity">{totalQuantity}</span>}
                                    </span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationAbove;
