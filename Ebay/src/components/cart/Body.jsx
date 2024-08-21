import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "70px" }}>
      <h5>You don't have any items in your cart.</h5>
      <p>Have an account? Sign in to see your items.</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "35px" }} className="btnContainer">
        <Link to="/"><button style={{ padding: "10px 65px", borderRadius: "20px", border: "1px solid blue", backgroundColor: "transparent", color: "blue" }}><strong>Start shopping</strong></button></Link>
       <Link to="/signin"> <button style={{ padding: "10px 85px", borderRadius: "20px", border: "1px solid blue", backgroundColor: "blue", color: "white" }}><strong>Sign in</strong></button></Link>
      </div>
    </div>
  )
}

export default Body;