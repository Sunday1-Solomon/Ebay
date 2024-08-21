import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [note, setNote] = useState('');
    const [merchantSales, setMerchantSales] = useState({});
    const [likeData, setLikeData] = useState([]);
    const [ratingData, setRatingData] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    const [orderDetails, setOrderDetails] = useState([]);
    const [productData, setProductData] = useState([]);
    
    const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';
    const userId = JSON.parse(localStorage.getItem("User_Task_Manager")).id;

    // const fetchUserCart = async (userId) => {
    //     try {
    //         const userId = JSON.parse(localStorage.getItem("User_Task_Manager")).id;

    //         const response = await axios.get(`${BASE_URL}/carts?user_id=${userId}`);
    //         console.log("The fetched user's cart:", response.data)

    //         if (response.status === 200) {
    //             setCartItems(response.data.cartItems);
    //             console.log("Cart items fetched successfully:", response.data);
    //             return response.data;
    //         } else {
    //             console.error("Failed to fetch cart items:", response);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching cart items:", error);
    //     }
    // };

    // Assuming you have a function to fetch product details by product ID
const fetchProductDetails = async (productId) => {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const data = await response.json();
    return data;
};

const fetchUserCart = async () => {
    const userId = JSON.parse(localStorage.getItem("User_Task_Manager")).id
    const response = await fetch(`${BASE_URL}/carts?user_id=${userId}`);
    const cartData = await response.json();

    if (Array.isArray(cartData)) {
        // Fetch additional details for each product in the cart
        const cartItemsWithDetails = await Promise.all(cartData.map(async (cartItem) => {
            const productsWithDetails = await Promise.all(cartItem.products.map(async (product) => {
                const productDetails = await fetchProductDetails(product.id);
                return {
                    ...product,
                    ...productDetails // Merge product details into the product object
                };
            }));
            return {
                ...cartItem,
                products: productsWithDetails
            };
        }));
        return cartItemsWithDetails;
    }
    return cartData;
};


    const fetchMerchantSales = async (merchantId) => {
        try {
            const response = await axios.get(`${BASE_URL}/sales?merchant_id=${merchantId}`);
            setMerchantSales(response.data);
        } catch (error) {
            console.error('Error fetching merchant sales:', error.response ? error.response.data : error.message);
        }
    };

    const addToCart = async (productId, userId, quantity) => {
        try {
            const requestBody = {
                quantity: parseInt(quantity),
                user_id: userId,
                product_id: productId,
                has_variation: false
            };

            console.log('Request to add to cart:', requestBody);

            const response = await axios.post(`${BASE_URL}/carts`, requestBody);
            setCartItems(response.data.cartItems);
            fetchUserCart();  // Fetch the updated cart items after adding
        } catch (error) {
            console.error('Error adding to cart:', error.response ? error.response.data : error.message);
        }
    };

    const addNoteToCart = async (userId, note) => {
        const requestBody = {
            user_id: userId,
            note
        };

        try {
            await axios.post(`${BASE_URL}/carts/set-note`, requestBody);
            setNote(note);
        } catch (error) {
            console.error('Error adding note to cart:', error.response ? error.response.data : error.message);
        }
    };

    const checkoutCart = async () => {
        const requestBody = {
            user_id: userId
        };

        try {
            const response = await axios.post(`${BASE_URL}/carts/checkout`, requestBody);
            return response;
        } catch (error) {
            console.error('Error during checkout:', error.response ? error.response.data : error.message);
            return error.response; // Return the error response if an error occurs
        }
    };

    const deleteCart = async () => {
        const requestBody = {
            user_id: userId
        };

        try {
            await axios.delete(`${BASE_URL}/carts`, { data: requestBody });
            setCartItems([]);
        } catch (error) {
            console.error('Error deleting cart:', error.response ? error.response.data : error.message);
        }
    };

    const updateCartItem = (itemId, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, quantity: Number(quantity) } : item
            )
        );
    };

   const removeCartItem = (itemId) => {
    setCartItems(prevItems => {
        return prevItems.map(cartItem => {
            const updatedProducts = cartItem.products.filter(product => product.id !== itemId);
            return { ...cartItem, products: updatedProducts };
        }).filter(cartItem => cartItem.products.length > 0);
    });
};


    // useEffect(() => {
    //     fetchUserCart();
    // }, [userId]);

    return (
        <CartContext.Provider value={{
            cartItems,
            setCartItems,
            addToCart,
            addNoteToCart,
            checkoutCart,
            deleteCart,
            updateCartItem,
            removeCartItem,
            merchantSales,
            fetchMerchantSales,
            fetchUserCart,
            note,
            setNote,
            likeData,
            setLikeData,
            ratingData,
            setRatingData,
            reviewData,
            setReviewData,
            orderDetails,
            setOrderDetails,
            productData,
            setProductData
        }}>
            {children}
        </CartContext.Provider>
    );
};
