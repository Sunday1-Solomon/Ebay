import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineLike } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { MdRateReview } from "react-icons/md";
import { Modal, Button, Form } from 'react-bootstrap';
import { IoCreateOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { GrDocumentUpdate } from "react-icons/gr";
import { HiBriefcase } from "react-icons/hi";
import { RiAlignTop } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";

const MerchantPage = () => {
  const merchantInfo = JSON.parse(localStorage.getItem("Task_Manager_User"));
  const merchantId = merchantInfo.id;

  const [getproduct, setGetproduct] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showMerchantInfo, setShowMerchantInfo] = useState([]);
  const [editMerchant, setEditMerchant] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    store_name: "",
    descp: "",
    icon: "",
    banner: "",
    state: "",
    district: "",
    social_media: {
      x: "",
      face_book: "",
      instagram: ""
    },
    phones: ""
  });

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordState, setPasswordState] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showSideNav, setShowSideNav] = useState(true); // State to toggle side navigation

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  const togglePasswordModal = () => {
    setPasswordState({ oldPassword: '', newPassword: '', confirmPassword: '' });
    setShowPasswordModal(!showPasswordModal);
  }

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav); // Toggle side navigation
  }

  const getMerchantProduct = async () => {
    try {
      const res = await axios.get(`http://ecommerce.reworkstaging.name.ng/v2/products?merchant_id=${merchantId}`);
      if (Array.isArray(res.data.data)) {
        setGetproduct(res.data.data);
      }
    } catch (error) {
      console.error("Error while getting product:", error);
    }
  }

  useEffect(() => {
    getMerchantProduct();
  }, []);

  const merchantEdit = (merchantInfo) => {
    setEditMerchant(merchantInfo);
    setShowModal(true);
  }

  const handleSavemerchantInfo = async (merchantInfo) => {
    try {
      const updatedMerchantInfo = {
        ...merchantInfo,
        first_name: merchantInfo.first_name,
        last_name: merchantInfo.last_name,
        store_name: merchantInfo.store_name,
        descp: merchantInfo.descp,
        phone: merchantInfo.phones
      }

      const res = await axios.put(`http://ecommerce.reworkstaging.name.ng/v2/merchants/${merchantId}`, updatedMerchantInfo);
      setShowMerchantInfo(showMerchantInfo.map((MerInfo) => (MerInfo.id === merchantInfo.id ? updatedMerchantInfo : MerInfo)));
      setShowModal(false);
      localStorage.setItem('Task_Manager_User', JSON.stringify(updatedMerchantInfo));
    } catch (error) {
      console.error("Error while updating merchant details:", error);
    }
  }

  const handleSavePassword = async (password) => {
    const { oldPassword, newPassword } = password;
    try {
      const res = await axios.put(`http://ecommerce.reworkstaging.name.ng/v2/merchants/${merchantId}/change-passwd`, { old_password: oldPassword, new_password: newPassword });
      console.log("Password Successfully Updated", res.data);
    } catch (error) {
      console.error("Error while updating password:", error);
    }
    setShowPasswordModal(false);
  }

  return (
    <div>
      <header style={{ background: "#f8f9fa", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px", borderBottom: "1px solid #dee2e6" }}>
        <div>
          <img src={merchantInfo.icon} alt="icon" style={{ width: "100px", height: "100px", borderRadius: "50%", marginLeft: "20px" }} />
          <div style={{ fontFamily: "serif", marginTop: "15px" }}>{merchantInfo.last_name} {merchantInfo.first_name}</div>
        </div>
        <div>
          <h5>Merchant Information</h5>
          <div style={{ display: 'flex', gap: "15px" }}>
            <div className='merchantInfo'>
              <p><strong>First Name</strong>: {merchantInfo.first_name}</p>
              <p><strong>Last Name</strong>: {merchantInfo.last_name}</p>
              <p><strong>Store Name</strong>: {merchantInfo.store_name}</p>
            </div>
            <div>
              <p><strong>Description</strong>: {merchantInfo.descp}</p>
              <p><strong>Phone</strong>: {merchantInfo.phones}</p>
            </div>
          </div>
        </div>
      </header>
      <Button onClick={toggleSideNav} style={{ marginLeft: "20px", marginTop: "15px", borderRadius: "30px", backgroundColor: "black" }}>
        {showSideNav ? <VscChromeClose /> : <VscMenu />}
      </Button>

      <div style={{ width: "100%", display: "flex", gap: "40px", marginTop: "30px" }} className='navBodyContainer'>
        {showSideNav && (
          <div style={{ width: "20%", height: "600px", background: "#343a40", padding: "20px", color: "white" }} className='navLeft'>
            <div><Link className='navLeftContent' style={{ color: "white", textDecoration: "none", display: "block", marginBottom: "10px", fontFamily: "sans-serif", textTransform: "uppercase" }} to="/catform"><IoCreateOutline style={{ fontSize: "35px" }} /> Create Category</Link></div>
            <div style={{ marginTop: "40px" }}><Link className='navLeftContent' style={{ color: "white", textDecoration: "none", display: "block", marginBottom: "10px", fontFamily: "sans-serif", textTransform: "uppercase" }} to="/cat"><GrView style={{ fontSize: "35px" }} /> View Categories</Link></div>
            <div style={{ marginTop: "40px" }}><Link className='navLeftContent' style={{ color: "white", textDecoration: "none", display: "block", marginBottom: "10px", fontFamily: "sans-serif", textTransform: "uppercase" }} to={"/createproduct/id"}><HiBriefcase style={{ fontSize: "35px" }} /> Create Product</Link></div>
            <div style={{ marginTop: "40px" }}><button className='navLeftContent' onClick={() => merchantEdit(merchantInfo)} style={{ color: "white", border: "none", background: "transparent", display: "block", marginBottom: "10px", fontFamily: "sans-serif", textTransform: "uppercase" }}><GrDocumentUpdate style={{ fontSize: "35px" }} /> Update Info</button></div>
            <div style={{ marginTop: "40px" }}><button className='navLeftContent' onClick={togglePasswordModal} style={{ color: "white", border: "none", background: "transparent", display: "block", marginBottom: "10px", fontFamily: "sans-serif", textTransform: "uppercase" }}><RiAlignTop style={{ fontSize: "35px" }} /> Update Password</button></div>
          </div>
        )}
        <div style={{ width: showSideNav ? "80%" : "100%", background: "#f8f9fa", padding: "20px" }} className='navRight'>
          <div style={{ border: "1px solid #dee2e6", padding: "40px 20px", marginBottom: "20px", textAlign: "center", background: "white" }} className='merchantBanner'>
            <img src={merchantInfo.banner} alt="banner" style={{ width: "100%", height: "auto" }} />
          </div>
          <div className='merchantProductTable'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Product Title</th>
                  <th>Product Brand</th>
                  <th>Product Description</th>
                  <th>Product Price</th>
                  <th>Product Likes</th>
                  <th>Product Ratings</th>
                  <th>Product Reviews</th>
                  <th>Total Sold</th>
                </tr>
              </thead>
              <tbody>
                {getproduct && getproduct.map((product) => (
                  <tr key={product.id}>
                    <td><img src={product.image} alt="product" style={{ width: "100px", height: "auto" }} /></td>
                    <td>{product.title}</td>
                    <td>{product.brand}</td>
                    <td>{product.descp}</td>
                    <td>{product.price}</td>
                    <td>{product.like} <AiOutlineLike /></td>
                    <td>{product.rating} <FcRating /></td>
                    <td>{product.review} <MdRateReview /></td>
                    <td>{product.total_sold}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            {showModal && (
              <Modal show={showModal} onHide={toggleModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Update Merchant Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        value={editMerchant.first_name}
                        onChange={(e) => setEditMerchant({ ...editMerchant, first_name: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        value={editMerchant.last_name}
                        onChange={(e) => setEditMerchant({ ...editMerchant, last_name: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group controlId="formStoreName">
                      <Form.Label>Store Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter store name"
                        value={editMerchant.store_name}
                        onChange={(e) => setEditMerchant({ ...editMerchant, store_name: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter description"
                        value={editMerchant.descp}
                        onChange={(e) => setEditMerchant({ ...editMerchant, descp: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone"
                        value={editMerchant.phones}
                        onChange={(e) => setEditMerchant({ ...editMerchant, phones: e.target.value })}
                      />
                    </Form.Group>
                    <Button variant="primary" onClick={() => handleSavemerchantInfo(editMerchant)}>
                      Save Changes
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            )}

            {showPasswordModal && (
              <Modal show={showPasswordModal} onHide={togglePasswordModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Update Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formOldPassword">
                      <Form.Label>Old Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter old password"
                        value={passwordState.oldPassword}
                        onChange={(e) => setPasswordState({ ...passwordState, oldPassword: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group controlId="formNewPassword">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter new password"
                        value={passwordState.newPassword}
                        onChange={(e) => setPasswordState({ ...passwordState, newPassword: e.target.value })}
                      />
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Confirm new password"
                        value={passwordState.confirmPassword}
                        onChange={(e) => setPasswordState({ ...passwordState, confirmPassword: e.target.value })}
                      />
                    </Form.Group>
                    <Button variant="primary" onClick={() => handleSavePassword(passwordState)}>
                      Update Password
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MerchantPage;
