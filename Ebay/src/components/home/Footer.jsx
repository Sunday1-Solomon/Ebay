import React from 'react';
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Footer = () => {
    return (
        <div className='footContainer'>
            <div className='footer'>
                <div>
                    <a className="links" href=""><h6>Buy</h6></a>
                    <ul>
                        <a href="#"> <li>Registration</li></a>
                        <a href="#"> <li>eBay Money Back Guarantee</li></a>
                        <a href="#"> <li>Bidding & buying help</li></a>
                        <a href="#"> <li>Stores</li></a>
                    </ul>
                </div>
                <div className='sellDiv'>
                    <div className='sellDiv1'>
                        <a className="links" href="#"><h6>Sell</h6></a>
                        <ul>
                            <a href="#"><li>Start selling</li></a>
                            <a href="#"><li>Learn to sell</li></a>
                            <a href="#"><li>Affiliates</li></a>
                        </ul>
                    </div>
                    <div className='sellDiv2'>
                        <a className="links" href="#"><h6>Tools & apps</h6></a>
                        <ul>
                            <a href="#"><li>Developers</li></a>
                            <a href="#"><li>Security center</li></a>
                            <a href="#"><li>Site map</li></a>
                        </ul>
                    </div>
                </div>
                <div>
                    <a className="links" href="#"><h6>Stay connected</h6></a>
                    <ul>
                        <a href="#"><li>eBay's Blogs</li></a>
                        <div className='fbDiv'>
                            <a href="#"><div className='faceBuk'><AiFillFacebook /></div></a>
                            <a href="#"><div className='fb'>Facebook</div></a>
                        </div>
                        <div className='twDiv'>
                            <a href="#"><div className='twitTer'><FaTwitterSquare /></div></a>
                            <a href="#"><div className='tw'>Twitter</div></a>
                        </div>
                    </ul>
                </div>
                <div>
                    <a className="links" href="#"> <h6>About eBay</h6></a>
                    <ul>
                        <a href="#"> <li>Company info</li></a>
                        <a href="#"><li>News</li></a>
                        <a href="#"><li>Investors</li></a>
                        <a href="#"><li>Careers</li></a>
                        <a href="#"><li>Government relations</li></a>
                        <a href="#"><li>Advertise with us</li></a>
                        <a href="#"><li>Policies</li></a>
                        <a href="#"><li>Verified Rights Owner (VeRO) Program</li></a>
                    </ul>
                </div>
                <div className='helpContactDiv'>
                    <div className='helpDiv'>
                        <a className="links" href="#"> <h6>Help & Contact</h6></a>
                        <ul>
                            <a href="#"><li>Seller Information Center</li></a>
                            <a href="#"><li>Contact us</li></a>
                        </ul>
                    </div>
                    <div className='communityDiv'>
                        <a className="links" href="#"><h6>Community</h6></a>
                        <ul>
                            <a href="#"><li>Announcements</li></a>
                            <a href="#"><li>Discussion boards</li></a>
                            <a href="#"><li>eBay Giving Works</li></a>
                        </ul>
                    </div>
                    <div className='ebaySitesDiv'>
                        <a className="links" href="#"><h6>eBay Sites</h6></a>
                        <button><LiaFlagUsaSolid style={{fontSize:"28px"}}/>United States</button>
                    </div>
                </div>
            </div>
            <div className='copyRight'>
                <p>Copyright © 1995-2024 eBay Inc. All Rights Reserved. <a href="#">Accessibility,</a> <a href="#">User Agreement,</a> <a href="#">Privacy,</a> <a href="#"> Payments Terms of Use,</a> <a href="#"> Cookies,</a> <a href="#"> CA Privacy Notice,</a> <a href="#"> Your Privacy Choices and </a> <a href="#">AdChoice</a></p>
            </div>
        </div>
    )
}

export default Footer;