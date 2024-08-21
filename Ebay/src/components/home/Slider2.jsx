import React from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import watchSlide from "../../images/watchSlide2-Photoroom.png-Photoroom.png"
import photoSlide from "../../images/photoSlide-Photoroom.png-Photoroom.png"
import horoscopeSlide from "../../images/horoscopeSlide-Photoroom.png-Photoroom.png"
import ecovacSlide from "../../images/EcovacSlide-Photoroom.png-Photoroom.png"
import headphoneSlide from "../../images/headphoneSlide-Photoroom.png-Photoroom.png"
import batterySlide from "../../images/batterySlide-Photoroom.png-Photoroom.png"
import iphoneSlide from "../../images/iphoneSlide-Photoroom.png-Photoroom.png"

const Slider2 = () => {
    return (
        <div style={{ marginTop: "10px", marginLeft: "100px" }}>
            <Carousel data-bs-theme="" interval={null} ride={true}>
                <Carousel.Item>
                    <div className="d-flex">
                        <div className="card" style={{ margin: "10px", borderRadius: "10px", width: "250px", height: "350px", border: "none", backgroundColor: "gainsboro", position: "relative" }}>
                            <img
                                style={{ marginTop: "48px" }}
                                src={watchSlide}
                                alt="First slide"
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "10px", backgroundColor: "white" }} className="card-body">
                                <p className="card-text">Apple Watch Series 3 38mm 42mm GPS+ WIFI + LTE UNLOCKED Gold</p>
                                <p style={{ display: "flex" }} className="card-text"><h5>$94.99</h5>
                                    <span>
                                        <strike>$199.99</strike></span></p>
                            </div>
                        </div>
                        <div className="card" style={{ margin: "10px", borderRadius: "10px", width: "250px", height: "350px", border: "none", backgroundColor: "gainsboro" }}>
                            <img
                                style={{ width: "200px", height: "200px" }}
                                src="https://i.ebayimg.com/thumbs/images/g/OicAAOSwmL1l35AG/s-l500.webp"
                                alt="Second slide"
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "10px", backgroundColor: "white" }} className="card-body">
                                <p className="card-text">Klipsch Gig XXL Portable Bluetooth Party Speaker - Certified Factory</p>
                                <p style={{ display: "flex" }} className="card-text"><h5>$119.99</h5>
                                    <span> <strike>$349.00</strike></span></p>
                            </div>
                        </div>
                        <div className="card" style={{ margin: "10px", borderRadius: "10px", width: "250px", height: "350px", border: "none", backgroundColor: "gainsboro" }}>
                            <img
                                style={{}}
                                src={photoSlide}
                                alt="Third slide"
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "10px", backgroundColor: "white" }} className="card-body">
                                <p className="card-text">Sony Alpha a7 III Mirrorless Digital Camera with 28-70mm Lens</p>
                                <p style={{ display: "flex" }} className="card-text"><h5>$1,599.00</h5>
                                    <span><strike>$2,198.00</strike></span></p>
                            </div>
                        </div>
                        <div className="card" style={{ margin: "10px", borderRadius: "10px", width: "250px", height: "340px", border: "none", backgroundColor: "gainsboro" }}>
                            <img
                                style={{width:"200px"}}
                                src={horoscopeSlide}
                                alt="Fourth slide"
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "10px", backgroundColor: "white" }} className="card-body">
                                <p className="card-text">Nikon 7245B 10 x 50 Action Extreme ATB Binoculars</p>
                                <p style={{ display: "flex" }} className="card-text"><h5>$99.99</h5>
                                    <span><strike>$199.99</strike></span></p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex">
                        <div className="card" style={{ margin: "10px", borderRadius: "10px", width: "250px", height: "390px", border: "none", backgroundColor: "gainsboro" }}>
                            <img
                                style={{}}
                                src={ecovacSlide}
                                alt="First slide"
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "10px", backgroundColor: "white" }} className="card-body">
                                <p className="card-text">ECOVACS DEEBOT T10 Plus Robot Vacuum & Mop Auto-Empty Air</p>
                                <p style={{ display: "flex" }} className="card-text"><h5>$299.99</h5>
                                    <span><strike>$949.99</strike></span></p>
                            </div>
                        </div>
                        <div className="card" style={{ margin: "10px", borderRadius: "10px", width: "250px", height: "370px", border: "none", backgroundColor: "gainsboro" }}>
                            <img
                                style={{}}
                                src={headphoneSlide}
                                alt="Second slide"
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "10px", backgroundColor: "white" }} className="card-body">
                                <p className="card-text">AKG N5005 Reference Class 5-driver Configuration In-Ear</p>
                                <p style={{ display: "flex" }} className="card-text"><h5>$159.99</h5>
                                    <span><strike>$999.95</strike></span></p>
                            </div>
                        </div>
                        <div className="card" style={{ margin: "10px", borderRadius: "10px", width: "250px", height: "390px", border: "none", backgroundColor: "gainsboro" }}>
                            <img
                                style={{}}
                                src={batterySlide}
                                alt="Third slide"
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "10px", backgroundColor: "white" }} className="card-body">
                                <p className="card-text">LiTime 12V 100Ah BCI Group 24 LiFePO4 Lithium Battery Built-In 100A</p>
                                <p style={{ display: "flex" }} className="card-text"><h5>$229.99</h5>
                                    <span><strike>$459.98</strike></span></p>
                            </div>
                        </div>
                        <div className="card" style={{ margin: "10px", borderRadius: "10px", width: "250px", height: "390px", border: "none", backgroundColor: "gainsboro" }}>
                            <img
                                style={{ marginTop: "20px" }}
                                src={iphoneSlide}
                                alt="Fourth slide"
                            />
                            <div style={{ position: "absolute", bottom: "0", left: "0", right: "0", padding: "10px", backgroundColor: "white" }} className="card-body">
                                <p className="card-text">Apple iPhone 12 64GB- Fully Unlocked All Mobile Carriers VERY</p>
                                <p style={{ display: "flex" }} className="card-text"><h5>$249.99</h5>
                                   <span> <strike>$599.00</strike></span></p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider2;