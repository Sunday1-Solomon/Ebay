import React from "react";
import regLogo from "../../images/ebay-logo-1-1200x1200-margin.png"
import { Link } from "react-router-dom";

const RegTop = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
        <div>
            <img style={{width:"150px"}} src={regLogo} alt="" />
        </div>
        <div style={{marginRight:"20px"}}>
           <p style={{marginTop:"15px", fontSize:"17px"}}>Already have an account?  <Link style={{color:"#6a6a6a"}} to="/signin"> Sign in</Link></p>  
        </div>
    </div>
    )
}

export default RegTop;