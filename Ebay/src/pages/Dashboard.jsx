import React, { useState, useEffect } from 'react';
import axios from "axios";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = 'http://ecommerce.reworkstaging.name.ng/v2';

  const user = JSON.parse(localStorage.getItem('User_Task_Manager'));
  const userId = user ? user.id : null;

  useEffect(() => {
    const fetchOrders = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/users/orders?user_id=${userId}`);
          console.log("The fetched order:", response.data);
          setOrders(response.data);
        } catch (error) {
          console.error(`Error fetching user's order details =>`, error);
        }
      };

      if(userId) {
        fetchOrders();
      }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {orders.map((order) => (
        <div key={order.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
          <h3>Order ID: {order.id}</h3>
          <p>Amount: {order.amount}</p>
          <p>Quantity: {order.quantity}</p>
          <p>Created At: {new Date(order.created_at).toLocaleString()}</p>
          <h4>Products:</h4>
          <ul>
            {order.products.map((product, index) => (
              <li key={index}>Product ID: {product.id}, Quantity: {product.quantity}, Amount: {product.amount}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
