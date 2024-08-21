import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { CartContext } from '../Context/CartContext';
import { FcLike } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import { MdReviews } from "react-icons/md";
import { IoReceiptSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";

const UserProfile = () => {
  const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';

  const [singleProduct, setSingleProduct] = useState({});
  const productId = JSON.parse(localStorage.getItem('Product_Category')).id;
  const { likeData, setLikeData, ratingData, setRatingData, reviewData, setReviewData, orderDetails, setOrderDetails } = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem('User_Task_Manager'));
  const userId = user ? user.id : null;

  const merchant = JSON.parse(localStorage.getItem("Task_Manager_User"))
  const merchantId = merchant ? merchant.id : null;

  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: ''
  });
  const [passwordState, setPasswordState] = useState({
    oldPassword: '',
    newPassword: '',
  });

  const [userlikes, setUserlikes] = useState([]);
  const [orderDetail, setOrderDetail] = useState([]);
  const [activeTable, setActiveTable] = useState('reviews');

  const togglePasswordModal = () => {
    setPasswordState({ oldPassword: '', newPassword: '', confirmPassword: '' });
    setShowPasswordModal(!showPasswordModal);
  };

  const userEdit = (user) => {
    setEditUserInfo(user);
    setShowUpdateForm(true);
  };

  const handleSaveUserInfo = async (updatedFields) => {
    try {
      const updatedUser = { ...user, ...updatedFields };

      await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
      setShowUpdateForm(false);
      localStorage.setItem('User_Task_Manager', JSON.stringify({
        id: userId,
        ...updatedFields
      }));
    } catch (error) {
      console.error('Error while updating user info:', error);
    }
  };

  const handleSaveUserPassword = async (password) => {
    const { oldPassword, newPassword } = password;

    try {
      await axios.put(`${BASE_URL}/users/${userId}/change-passwd`, { old_password: oldPassword, new_password: newPassword });
      setShowPasswordModal(false);
    } catch (error) {
      console.error('Error while changing password:', error);
    }
  };

  const handleCloseModal = () => {
    setShowUpdateForm(false);
    setShowPasswordModal(false);
  };

  const fetchUserRating = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/ratings?user_id=${userId}`);
      setRatingData(response.data);
    } catch (error) {
      console.error('Error fetching user ratings:', error.response ? error.response.data : error.message);
    }
  };

  const getSingleProductDetails = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/products?product_id=${productId}`);
      setSingleProduct(res.data);
    } catch (error) {
      console.error("Error while getting product details:", error);
    }
  };

  useEffect(() => {
    getSingleProductDetails()
  }, [productId])

  const fetchUserReview = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/reviews?user_id=${userId}`);
      setReviewData(response.data);
    } catch (error) {
      console.error(`Error fetching user's review =>`, error);
    }
  };

  const fetchUserLike = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/likes?user_id=${userId}`);
      setUserlikes(response.data);
    } catch (error) {
      console.error(`Error fetching user like =>`, error);
    }
  };

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users/orders?user_id=${userId}`);
      setOrderDetail(response.data.data);
    } catch (error) {
      console.error(`Error fetching user's order details =>`, error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserReview();
      fetchUserRating();
      fetchUserLike();
      fetchOrderDetails();
    }
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const renderTable = () => {
    switch (activeTable) {
      case 'likes':
        return (
          <div className="col-md-6">
            <h3 style={{ marginLeft: "350px" }}>Likes</h3>
            <table style={{ width: "200%" }} className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>User Name</th>
                </tr>
              </thead>
              <tbody>
                {userlikes.length > 0 ? (
                  userlikes.map(like => (
                    <tr key={like.id}>
                      <td>
                        {like.product_id && like.product_id.images ? (
                          <img src={like.product_id.images[0]} style={{ width: "50px", height: "50px" }} alt="product" />
                        ) : null}
                      </td>
                      <td>{like.user ? `${like.user.first_name} ${like.user.last_name}` : ''}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No likes available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case 'ratings':
        return (
          <div className="col-md-6">
            <h3 style={{ marginLeft: "350px" }}>Ratings</h3>
            <table style={{ width: "200%" }} className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Rating Value</th>
                  <th>Rating Text</th>
                </tr>
              </thead>
              <tbody>
                {ratingData.length > 0 ? (
                  ratingData.map(rating => (
                    <tr key={rating.id}>
                      <td>
                        {rating.product && rating.product.images ? (
                          <img src={rating.product.images} style={{ width: "50px", height: "50px" }} alt="product" />
                        ) : null}
                      </td>
                      <td>{rating.value}</td>
                      <td>{rating.text}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No ratings available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case 'reviews':
        return (
          <div className="col-md-6">
            <h3 style={{ marginLeft: "350px" }}>Reviews</h3>
            <table style={{ width: "200%" }} className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>Product Image</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {reviewData.length > 0 ? (
                  reviewData.map(review => (
                    <tr key={review.id}>
                      <td>
                        {review.product && review.product.images ? (
                          <img src={review.product.images} style={{ width: "50px", height: "50px" }} alt="product" />
                        ) : null}
                      </td>
                      <td>{review.text}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No reviews available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      case 'orderDetails':
        return (
          <div className="col-md-6">
            <div>
              <h3 style={{ marginLeft: "350px" }}>Order Details</h3>
            </div>
            <table style={{ width: "200%" }} className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Amount</th>
                  <th>Created At</th>
                  <th>Products</th>
                </tr>
              </thead>
              <tbody>
                {orderDetail.length > 0 ? (
                  orderDetail.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.amount}</td>
                      <td>{order.created_at}</td>
                      <td>
                        <ul>
                          {order.products.map(product => (
                            <li key={product.id}>
                              {product.quantity} x ${product.amount}
                            </li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No orders available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="row">
      <div className="col-md-2">
        <div className="list-group">

          <button onClick={() => setActiveTable('likes')} className={`list-group-item list-group-item-action ${activeTable === 'likes' ? 'active' : ''}`}>
            <p style={{ fontFamily: "sans-serif", textTransform: "uppercase" }}><FcLike style={{ fontSize: "35px" }} /> Likes</p>
          </button>
          <button onClick={() => setActiveTable('ratings')} className={`list-group-item list-group-item-action ${activeTable === 'ratings' ? 'active' : ''}`}>
            <p style={{ fontFamily: "sans-serif", textTransform: "uppercase" }}><FcRating style={{ fontSize: "35px" }} /> Ratings</p>
          </button>
          <button onClick={() => setActiveTable('reviews')} className={`list-group-item list-group-item-action ${activeTable === 'reviews' ? 'active' : ''}`}>
            <p style={{ fontFamily: "sans-serif", textTransform: "uppercase" }}><MdReviews style={{ fontSize: "35px" }} /> Reviews</p>
          </button>
          <button onClick={() => setActiveTable('orderDetails')} className={`list-group-item list-group-item-action ${activeTable === 'orderDetails' ? 'active' : ''}`}>
            <p style={{ fontFamily: "sans-serif", textTransform: "uppercase" }}><IoReceiptSharp style={{ fontSize: "35px" }} /> Orders</p>
          </button>

          <Link style={{ textTransform: "uppercase", marginLeft: "30px", marginTop: "20px", textDecoration: "none", fontFamily: "serif", fontSize: "20px" }} to="/"><IoArrowBackOutline /> Back</Link>
        </div>
      </div>
      <div className="col-md-10">
        <h3>Personal Information</h3>
        <table className="table table-bordered table-striped">
          <tbody>
            <tr>
              <td>First Name</td>
              <td>{user.first_name}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{user.last_name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>{user.phone}</td>
            </tr>
          </tbody>
        </table>
        <Button variant="primary" onClick={() => userEdit(user)}>
          Edit Personal Info
        </Button>
        <Button style={{ marginLeft: "15px" }} variant="secondary" onClick={togglePasswordModal}>
          Change Password
        </Button>
        {renderTable()}
      </div>

      {showUpdateForm && (
        <Modal show={showUpdateForm} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update User Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                value={editUserInfo.first_name}
                onChange={(e) => setEditUserInfo({ ...editUserInfo, first_name: e.target.value })}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                value={editUserInfo.last_name}
                onChange={(e) => setEditUserInfo({ ...editUserInfo, last_name: e.target.value })}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={editUserInfo.email}
                onChange={(e) => setEditUserInfo({ ...editUserInfo, email: e.target.value })}
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="text"
                className="form-control"
                value={editUserInfo.phone}
                onChange={(e) => setEditUserInfo({ ...editUserInfo, phone: e.target.value })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleSaveUserInfo(editUserInfo)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {showPasswordModal && (
        <Modal show={showPasswordModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label>Old Password:</label>
              <input
                type="password"
                className="form-control"
                value={passwordState.oldPassword}
                onChange={(e) => setPasswordState({ ...passwordState, oldPassword: e.target.value })}
              />
            </div>
            <div>
              <label>New Password:</label>
              <input
                type="password"
                className="form-control"
                value={passwordState.newPassword}
                onChange={(e) => setPasswordState({ ...passwordState, newPassword: e.target.value })}
              />
            </div>
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                className="form-control"
                value={passwordState.confirmPassword}
                onChange={(e) => setPasswordState({ ...passwordState, confirmPassword: e.target.value })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleSaveUserPassword(passwordState)}>
              Change Password
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default UserProfile;
