import React from "react";

const Category = () => {
    return (
        <div style={{overflow:"hidden"}} className="categoryContainer">
            <div style={{margin:"0px 50px", marginTop:"60px"}} className="d-flex justify-content-between">
                <div>
                    <h4>Explore Popular Categories</h4>
                </div>
                <div>
                    <a href="#">See all</a>
                </div>
            </div>
            <div style={{margin:"0px 20px"}} className="d-flex">
                <div className="p-2">
                    <a style={{textDecoration:"none"}} href="#">
                        <img style={{ width: "170px" }} src="https://i.ebayimg.com/00/s/Mjg4WDI4OA==/z/2RkAAOSwPutl-aPO/$_57.JPG" alt="" />
                        <p style={{color:"black", marginLeft:"10px"}}>Saved 15%* on luxury items</p>
                    </a>
                </div>
                <div className="p-2">
                    <a style={{textDecoration:"none"}} href="#">
                        <img style={{ width: "170px" }} src="https://ir.ebaystatic.com/cr/v/c01/01_Trading Cards.jpg" alt="" />
                        <p style={{color:"black", marginLeft:"29px"}}>Trading cards</p>
                    </a>
                </div>
                <div className="p-2">
                    <a style={{textDecoration:"none"}} href="#">
                        <img style={{ width: "160px" }} src="https://ir.ebaystatic.com/cr/v/c01/03_Pre-loved Luxuryeng.jpg" alt="" />
                        <p style={{color:"black", marginLeft:"20px", marginTop:"10px"}}>Pre-loved luxury</p>
                    </a>
                </div>
                <div className="p-2">
                    <a style={{textDecoration:"none"}} href="#">
                        <img style={{ width: "160px" }} src="https://ir.ebaystatic.com/cr/v/c01/04_Sneakerseng.jpg" alt="" />
                        <p style={{color:"black", marginLeft:"43px", marginTop:"10px"}}>Sneakers</p>
                    </a>
                </div>
                <div className="p-2">
                    <a style={{textDecoration:"none"}} href="#">
                        <img style={{ width: "160px" }} src="https://ir.ebaystatic.com/cr/v/c01/05_Watcheseng.jpg" alt="" />
                        <p style={{color:"black", marginLeft:"45px", marginTop:"8px"}}>Watches</p>
                    </a>
                </div>
                <div className="p-2">
                    <a style={{textDecoration:"none"}} href="#">
                        <img style={{ width: "160px" }} src="https://ir.ebaystatic.com/cr/v/c01/06_Handbagseng.jpg" alt="" />
                        <p style={{color:"black", marginLeft:"40px", marginTop:"5px"}}>Handbags</p>
                    </a>
                </div>
                <div className="p-2">
                    <a style={{textDecoration:"none"}} href="#">
                        <img style={{ width: "160px" }} src="https://ir.ebaystatic.com/cr/v/c01/07_Start Sellingeng.jpg" alt="" />
                        <p style={{color:"black", marginLeft:"44px", marginTop:"5px"}}>Start sellin</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Category;