import React from "react";
import signlogo from "../../images/ebay-logo-1-1200x1200-margin.png"

const Top = () => {
    return (
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div>
                <img style={{width:"150px"}} src={signlogo} alt="" />
            </div>
            <div style={{marginRight:"20px"}}>
                <a href="#">Tell Us What You Think</a>
            </div>
        </div>
    )
}

export default Top;