import React from "react";

const ShoppingCart = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }} className="shopping-cartContainer">
            <div style={{marginLeft:"20px"}}>
                <h2>Shopping Cart</h2>
            </div>
            <div style={{marginRight:"20px"}}>
                <a href="#">Send Us Your Comments</a>
            </div>
        </div>
    )
}

export default ShoppingCart;