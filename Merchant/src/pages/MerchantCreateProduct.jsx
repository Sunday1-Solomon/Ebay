import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom';

const MerchantHomePage = () => {
    const { id } = useParams()
    const countries = [
        "Germany",
        "Spain",
        "USA",
        "Mexico",
        "India"
    ];

    const [file, setFile] = useState('');
    const [selectedCountries, setSelectedCountries] = useState([]);
    const navigate = useNavigate();
    let url = "http://ecommerce.reworkstaging.name.ng/v2";
    let loggedUser = JSON.parse(localStorage.getItem("Task_Manager_User"));

    const [productsDetails, setProductsDetails] = useState({
        title: "",
        descp: "",
        price: "",
        brand: "",
        quantity: "",
        images: [],
        attrib: [
            { type: "", content: [{ name: "", value: "" }] }
        ],
        currency: "NGN",
        min_qty: "",
        max_qty: "",
        discount: "",
        discount_expiration: "",
        has_refund_policy: true,
        has_discount: true,
        has_shipment: true,
        has_variation: true,
        shipping_locations: [],
        variations: [
            { type: "", text: "", content: [{ display: [{ type: "", value: "" }], text: "" }] }
        ],
        merchant_id: loggedUser.id,
        category_id: id
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('id', '233050241');
            formData.append('image', file);

            const imageResponse = await axios.post('http://bucket.reworkstaging.name.ng/resources', formData);
            const imageUrl = imageResponse.data.data[0].url;

            const productData = {
                ...productsDetails,
                images: [imageUrl]
            }

            const productResponse = await axios.post('http://ecommerce.reworkstaging.name.ng/v2/products', productData);
            const response = console.log(productResponse.data);

            setFile(null);
            setProductsDetails({});
            navigate('/merchantpage');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            overflow: "hidden"
        }}>

            <video autoPlay loop muted playsInline style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "translate(-50%, -50%)",
                zIndex: "-1"
            }}>
                <source src="https://www.shutterstock.com/shutterstock/videos/1108312863/preview/stock-footage-animated-infinite-zoom-out-virtual-background-with-social-networks-connected-together-online.mp4" type="video/mp4" />
            </video>
            
            <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '30px', maxWidth: '80%', margin: 'auto', boxShadow: '0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)', backdropFilter: 'blur(30px)', }}>
                <h4 style={{ textAlign: "center" }}>Kindly Fill This Form To Create A Product</h4>
                <div style={{ color: "red", textAlign: "center" }}>
                    <p>NOTE: Fields With Asterisks Are Mandatory.</p>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', maxWidth: '70%', margin: 'auto' }}>
                    <div>
                        <div className="form-category">
                            <label htmlFor="title">Product title **</label><br />
                            <input type="text" name="title" className='product-title' required placeholder="Required"
                                value={productsDetails.title}
                                onChange={e => setProductsDetails({ ...productsDetails, title: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="descp">Product description **</label><br />
                            <input type="text" name="descp" className='product-description' required placeholder="Required"
                                value={productsDetails.descp}
                                onChange={e => setProductsDetails({ ...productsDetails, descp: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="price">Product price **</label><br />
                            <input type="text" name="price" className='product-price' required placeholder="Required"
                                value={productsDetails.price}
                                onChange={e => setProductsDetails({ ...productsDetails, price: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="brand">Product brand **</label><br />
                            <input type="text" name="brand" className='product-brand' required placeholder="Required"
                                value={productsDetails.brand}
                                onChange={e => setProductsDetails({ ...productsDetails, brand: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="quantity">Product quantity **</label><br />
                            <input type="text" name="quantity" className='product-quantity' required placeholder="Required"
                                value={productsDetails.quantity}
                                onChange={e => setProductsDetails({ ...productsDetails, quantity: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                    </div>
                    <div>
                        <div className="form-category">
                            <label htmlFor="curency">Product currency</label><br />
                            <input type="text" name="currency" className='product-currency' required placeholder="Required"
                                value={productsDetails.currency}
                                onChange={e => setProductsDetails({ ...productsDetails, currency: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="min_qty">Product min quantity **</label><br />
                            <input type="text" name="min_qty" className='product-min-qty' required placeholder="Required"
                                value={productsDetails.min_qty}
                                onChange={e => setProductsDetails({ ...productsDetails, min_qty: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="max_qty">Product max quantity **</label><br />
                            <input type="text" name="max_qty" className='product-max-qty' required placeholder="Required"
                                value={productsDetails.max_qty}
                                onChange={e => setProductsDetails({ ...productsDetails, max_qty: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="discount">Product discount **</label><br />
                            <input type="text" name="discount" className='product-discount' required placeholder="Required"
                                value={productsDetails.discount}
                                onChange={e => setProductsDetails({ ...productsDetails, discount: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="discount_expiration">Product discount expiration **</label><br />
                            <input type="date" name="discount_expiration" className='product-discount-expiration' required placeholder="Required"
                                value={productsDetails.discount_expiration}
                                onChange={e => setProductsDetails({ ...productsDetails, discount_expiration: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="images">Product images **</label><br />
                            <input type="file" name="images" className='product-images' multiple required placeholder="Required"
                                onChange={e => setFile(e.target.files[0])}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                    </div>
                    <div>
                        <div className="form-category">
                            <label htmlFor="has_refund_policy">Has Refund Policy</label><br />
                            <input type="checkbox" name="has_refund_policy" className='product-has-refund-policy'
                                checked={productsDetails.has_refund_policy}
                                onChange={e => setProductsDetails({ ...productsDetails, has_refund_policy: e.target.checked })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="has_discount">Has Discount</label><br />
                            <input type="checkbox" name="has_discount" className='product-has-discount'
                                checked={productsDetails.has_discount}
                                onChange={e => setProductsDetails({ ...productsDetails, has_discount: e.target.checked })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="has_shipment">Has Shipment</label><br />
                            <input type="checkbox" name="has_shipment" className='product-has-shipment'
                                checked={productsDetails.has_shipment}
                                onChange={e => setProductsDetails({ ...productsDetails, has_shipment: e.target.checked })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="has_variation">Has Variation</label><br />
                            <input type="checkbox" name="has_variation" className='product-has-variation'
                                checked={productsDetails.has_variation}
                                onChange={e => setProductsDetails({ ...productsDetails, has_variation: e.target.checked })}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            /><br /><br />
                        </div>
                        <div className="form-category">
                            <label htmlFor="shipping_locations">Product shipping location **</label><br />
                            <select multiple name="shipping_locations" className='product-shipping-locations' required placeholder="Required"
                                value={selectedCountries}
                                onChange={e => setSelectedCountries([...e.target.selectedOptions].map(o => o.value))}
                                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                            >
                                {countries.map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                            </select><br /><br />
                        </div>
                        <div className="form-category">
                            <button type="submit" className="submit-button"
                                style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MerchantHomePage;
