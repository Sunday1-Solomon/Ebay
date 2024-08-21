import React from "react";

const Cartfooter = () => {
    return (
        <div style={{marginTop:"130px", borderTop:'1px solid #d6d6d6'}}>
            <div style={{marginTop:"40px"}} className="cartfooter">
                <ul style={{ listStyleType: 'none', display: 'flex', gap:"10px", fontSize:"13px", color:"#767676"}}>
                    <li className="cartFooterText"><a href="#">About eBay</a></li>
                    <li className="cartFooterText"><a href="#">Announcements</a></li>
                    <li className="cartFooterText"><a href="#">Community</a></li>
                    <li className="cartFooterText"><a href="#">Security Center</a></li>
                    <li className="cartFooterText"><a href="#">Seller Information Center</a></li>
                    <li className="cartFooterText"><a href="#">Policies</a></li>
                    <li className="cartFooterText"><a href="#">Affiliates</a></li>
                    <li className="cartFooterText"><a href="#">Help & Contact</a></li>
                    <li className="cartFooterText"><a href="#">Site Map</a></li>
                </ul>
                <div style={{marginLeft:"30px"}}>
                    <p className="cartPtag" style={{fontSize:'12px'}}>Copyright © 1995-2024 eBay Inc. All Rights Reserved. <a href="#">Accessibility,</a> <a href="#">User Agreement,</a> <a href="#">Privacy,</a> <a href="#"> Payments Terms of Use,</a> <a href="#"> Cookies,</a> <a href="#"> CA Privacy Notice,</a> <a href="#"> Your Privacy Choices and </a> <a href="#">AdChoice</a></p>
                </div>
            </div>
        </div>
    )
}

export default Cartfooter;