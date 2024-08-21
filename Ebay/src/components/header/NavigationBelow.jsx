import React from 'react'
import { MdFavorite } from "react-icons/md";
import {
  IoLocationSharp,
  IoSearchSharp,
  IoHeartOutline,
  IoBasketOutline,
  IoArrowForwardSharp,
  IoChevronForwardOutline
} from "react-icons/io5";
import { Link } from 'react-router-dom';



const NavigationBelow = () => {
  return (
    <div className='navdown'>
      <div><a href="#">Home</a></div>
      <div><MdFavorite /><a href="#">Saved</a></div>
      <div><a href="#">Electronics</a></div>
      <div><a href="#">Motors</a></div>
      <div><a href="#">Fashion</a></div>
      <div><a href="#">Collectibles & Art</a></div>
      <div><a href="#">Sport</a></div>
      <div><a href="#">Health & Beauty</a></div>
      <div><a href="#">Industrial equipment</a></div>
      <div><a href="#">Home & Garden</a></div>
      <div><a href="#">Deals</a></div>
      <div><a href="#">Sell</a></div>

      <div style={{ height: "" }} class="dropdown">
        <div style={{marginTop:"-6px"}}>
          <button style={{ border: "none", backgroundColor: "transparent", fontSize: "15px" }}>
            Select Category
          </button>
        </div>
        <div style={{ height: "300px", width: "350px", marginTop: "100px", paddingLeft: "20px" }} class="dropdown-content">

          <div class="row">
            <div class="column">

              <div className="allJ"><b>Fashion  <IoArrowForwardSharp /></b></div>
              <div className="megaArrow"><Link><p>Women</p></Link></div>
              <div className="megaArrow"><Link><p>Men</p></Link></div>
              <div className="megaArrow"><Link><p>Jewelry & Watches</p></Link></div>
              <div className="megaArrow"><Link to="/shop"><p>Shoes</p></Link></div>
            </div>
            <div class="column">

              <div><b> Electronics  <IoArrowForwardSharp /></b></div>
              <Link>Baseball & Trucker Hats</Link>
              <Link>Sun Hats</Link>
              <Link>Hair Accessories</Link>
              <Link>Fascinators & Mini Hats</Link>
              <Link>Hairslides & Clips</Link>
              <Link>Ties & Elastics</Link>
              <Link>Body Jewelleries</Link>
              <Link><b>Wreaths & Tiaras</b></Link>

            </div>
            <div class="column">
              <ul>
                <li><b>Sunglasses & Eyewear</b></li>
                <li>Scarves & Wraps</li>
                <li>Belts & Braces</li>
                <li>Keychains & Lanyards</li>
                <li>Cosmetic & Toiletry Bags</li>
                <li>Gloves & Mittens</li>
                <li>Umbrellas & Rain Accessories</li>
                <li>Wallets & Money Clips</li>
                <li className="allJ"><b>All Accessories  <IoArrowForwardSharp /></b></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBelow;