import React from "react";

const Next2Footer = () => {
    return (
        <div className="next2FooterContainer">
            <div style={{ display: "flex", marginTop:"60px", marginLeft:"10px" }} className="next2Footer">
                <div   style={{paddingLeft:"45px", backgroundColor:"#f7f7f7"}}>
                    <h2 style={{width:"250px"}}>Luxury accessories, savings you’ll...</h2>
                    <p>Save 15%* now on luxury watches, jewelry and handbags.</p>
                    <button style={{padding:"5px 10px", borderRadius:"20px", backgroundColor:"transparent", border:"1px solid black" }}>Code LUXDEALS15</button>
                    <div style={{marginTop:"15px", fontSize:"12px"}}>
                        <a style={{color:"#191919"}} href="#">Code LUXDEALS15
                            *min. spend $300, max discount $100</a>
                    </div>
                </div>
                <div>
                    <img style={{ width: "900px" }} src="	https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/FAcAAOSw10ll7yBH/$_57.JPG" alt="Image is here" />
                </div>
            </div>
        </div>
    )
}

export default Next2Footer;