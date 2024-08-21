import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import ShoppingCart from "../components/cart/Shoppingcart";
import Cartfooter from "../components/cart/Cartfooter";
import Navigation from "../components/header/Navigation";
import NavigationAbove from "../components/header/NavigationAbove";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

const CartPage = () => {
    const {
        cartItems = [], // Default to an empty array if cartItems is undefined
        setCartItems,
        note,
        setNote,
        addNoteToCart,
        checkoutCart,
        deleteCart,
        updateCartItem,
        removeCartItem,
        fetchMerchantSales,
        merchantSales,
        fetchUserCart
    } = useContext(CartContext);

    const userId = JSON.parse(localStorage.getItem("User_Task_Manager")).id;

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUserCart(userId);
            console.log("Fetched cart data:", data);  // Log the fetched data
            if (data && Array.isArray(data)) {
                setCartItems(data);
            } else {
                console.error("Fetched data is not an array:", data);
            }
        };
        fetchData();
    }, [userId, setCartItems]);

    // console.log("Current cartItems state:", cartItems);  // Log the state

    const totalQuantity = Array.isArray(cartItems) ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
    const totalPrice = Array.isArray(cartItems) ? cartItems.reduce((total, item) => total + parseFloat(item.amount.replace(/,/g, '')) * item.quantity, 0) : 0;

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [noteText, setNoteText] = useState(note);
    const [showCheckoutSummary, setShowCheckoutSummary] = useState(false);

    const handleOpenModal = () => {
        setNoteText(note); // Ensure current note is in the modal
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
    };

    const handleSaveNote = async () => {
        await addNoteToCart(userId, noteText);
        setModalIsOpen(false);
    };

    const handleRemoveNote = () => {
        setNoteText('');
        setNote('');
    };

    const handleCheckout = async () => {
        try {
            console.log("Attempting to checkout with cart items:", cartItems);
            console.log("Attempting to checkout with user ID:", userId);
            const response = await checkoutCart(userId);
            if (response && response.status === 200) {
                alert("Successfully Checked Out Of Cart!!!")
                setShowCheckoutSummary(false); // Show checkout summary modal on successful checkout
            } else {
                console.error("Checkout failed:", response);
                alert(`Checkout failed: ${response ? response.data.message : "Unknown error"}`);
            }
        } catch (error) {
            console.error("Error during checkout:", error);
            alert(`Checkout failed due to server error: ${error.message}`);
        }
    };

    const handleDeleteCart = async () => {
        await deleteCart(userId);
        alert("Cart deleted!");
    };

    const handleQuantityChange = (item, quantity) => {
        updateCartItem(item.id, parseFloat(quantity));
    };

    const handleRemoveItem = async (itemId) => {
        console.log("Removing item with ID:", itemId);
        await removeCartItem(itemId);
        console.log("Cart items after removal:", cartItems);
    };

    const renderCheckoutSummary = () => (
        <Modal show={showCheckoutSummary} onHide={() => setShowCheckoutSummary(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Order Summary</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.map((cartItem) => (
                    <div key={cartItem.id} style={{ marginBottom: "20px" }}>
                        <h5>ORDER ID: {cartItem.id}</h5>
                        <p>CREATED AT: {new Date(cartItem.created_at).toString()}</p>
                        {cartItem.products.map((item) => (
                            <div key={item.id} style={{ marginBottom: "10px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>
                                        <img src={item.images} alt="" style={{ width: "50px", height: "50px" }} />
                                        <Link to={`/product/${item.id}`}><h6>{item.descp}</h6></Link>
                                    </div>
                                    <div>
                                        <p>Qty: {item.quantity}</p>
                                        <p>Price: NGN {parseFloat(item.amount.replace(/,/g, '')).toFixed(2)}</p>
                                        <p>Total: NGN {(parseFloat(item.amount.replace(/,/g, '')) * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                    <h5>Grand-Total:</h5>
                    <h5>NGN {(totalPrice * totalQuantity).toFixed(2)}</h5>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowCheckoutSummary(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCheckout}>
                    Confirm Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    );

    const [cartRightsectionDisplayed, setCartRightsectionDisplayed] = useState(false);

    // Calculate total sales made for each item in the cart
    const itemSales = Array.isArray(cartItems) ? cartItems.reduce((acc, item) => {
        const sales = merchantSales.sales ? merchantSales.sales.filter(sale => sale.product_id === item.id) : [];
        const totalSold = sales.reduce((sum, sale) => sum + sale.quantity, 0);
        acc[item.id] = totalSold;
        return acc;
    }, {}) : {};

    return (
        <div>
            <NavigationAbove />
            <Navigation />
            <ShoppingCart />
            {cartItems.length === 0 ? (
                <p style={{ textAlign: "center", fontWeight: "bolder", marginTop: "80px", fontSize: "50px" }}>Your Cart is Empty!!!</p>
            ) : (
                <div>
                    {cartItems.map((cartItem, index) => (
                        <div key={cartItem.id} style={{ marginBottom: "50px" }}>
                            <h3>ORDER ID: {cartItem.id}</h3>
                            {cartItem.products.map((item, index) => (
                                <div key={item.id} style={{ display: "flex", gap: "10px", marginTop: "50px" }} className="cartBodyApart">
                                    <div className="bodyApartLeft">
                                        <div style={{ display: "flex", marginTop: "-100px" }} className="insideBodyApartLeft">
                                            <div style={{ display: "flex", gap: "40px" }}>
                                                <div style={{ marginLeft: "10px", marginTop: "-40px" }}>
                                                    <img style={{ width: "270px", height: "270px" }} src={item.images} alt="" />
                                                </div>
                                                <div>
                                                    <div>
                                                        <Link to={`/product/${item.id}`}><h5>{item.descp}</h5></Link>
                                                    </div>
                                                    <div>
                                                        <p style={{ border: "1px solid red", width: "70px", borderRadius: "20px", textAlign: "center", color: "red" }}>{itemSales[item.id]} sold</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", gap: "50px", marginLeft: "60px" }} className="disdis">
                                                <div style={{ display: "flex", gap: "10px" }}>
                                                    <div>
                                                        <p>Qty</p>
                                                    </div>
                                                    <div>
                                                        <Form.Select
                                                            style={{ width: "60px" }}
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(item, e.target.value)}
                                                        >
                                                            {[...Array(10)].map((_, i) => (
                                                                <option key={i} value={i + 1}>{i + 1}</option>
                                                            ))}
                                                            <option value="10+">10+</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5>NGN {(parseFloat(item.amount.replace(/,/g, '')) * item.quantity).toFixed(2)}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ float: "right", marginRight: "100px", marginTop: "-30px" }}>
                                            <Button variant="link" onClick={() => handleRemoveItem(item.id)}>
                                                <strong>Remove</strong>
                                            </Button>
                                        </div>
                                    </div>
                                    {index === 0 && !cartRightsectionDisplayed && (
                                        <div className="bodyApartRight">
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "-120px" }} className="div1">
                                                <div style={{ marginLeft: "15px" }}>
                                                    <h6>Item ({totalQuantity})</h6>
                                                </div>
                                                <div style={{ marginRight: "15px" }}>
                                                    <span>NGN {totalPrice.toFixed(2)}</span>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-between" }} className="div2">
                                                <div style={{ marginLeft: "15px" }}>
                                                    <h6>Shipping</h6>
                                                </div>
                                                <div style={{ marginRight: "15px" }}>
                                                    <span>Free</span>
                                                </div>
                                            </div>
                                            <div className="linethrough"></div>
                                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }} className="div2">
                                                <div style={{ marginLeft: "15px" }}>
                                                    <h5>Subtotal</h5>
                                                </div>
                                                <div style={{ marginRight: "15px" }}>
                                                    <h5>NGN {totalPrice.toFixed(2)}</h5>
                                                </div>
                                            </div>
                                            {note && (
                                                <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}>
                                                    <h6>Note:</h6>
                                                    <p>{note}</p>
                                                </div>
                                            )}
                                            <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                                                <Button variant="secondary" style={{ marginBottom: "10px" }} onClick={handleOpenModal}>
                                                    {note ? 'Edit Note' : 'Add Note'}
                                                </Button>
                                                {note && (
                                                    <Button variant="danger" style={{ marginBottom: "10px" }} onClick={handleRemoveNote}>
                                                        Remove Note
                                                    </Button>
                                                )}
                                                <Button variant="danger" style={{ marginBottom: "10px" }} onClick={handleDeleteCart}>
                                                    Delete Cart
                                                </Button>
                                                <Button onClick={() => setShowCheckoutSummary(true)}>Checkout</Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
            <Modal show={modalIsOpen} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{note ? 'Edit Note' : 'Add Note'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveNote}>
                        Save Note
                    </Button>
                </Modal.Footer>
            </Modal>
            {renderCheckoutSummary()}
            <Cartfooter />
        </div>
    );
};

export default CartPage;
