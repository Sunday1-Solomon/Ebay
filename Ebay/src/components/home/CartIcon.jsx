
import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";

const CartIcon = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="cart-icon" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src="" alt="" /><BsCart2 style={{fontSize: '1.5rem'}}/>
            {isHovered && <div className="overlay"></div>}
            {isHovered && (
                <div className="dropdown-content">
                 <h5>Your Cart is Empty</h5>
                 <p>Time to start shopping!</p>
                </div>
            )}
        </div>
    );
};

export default CartIcon;