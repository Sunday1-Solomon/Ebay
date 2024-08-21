import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = ({ imageURL }) => {
  let url = "http://ecommerce.reworkstaging.name.ng/v2";
  let loggedUser = JSON.parse(localStorage.getItem("Task_Manager_User"));
  const navigate = useNavigate();
  const [catergory, setCatergory] = useState({ merchant_id: loggedUser.id, name: "", image: "" });

  const createCatergory = async (e) => {
    e.preventDefault();
    try {
      const catResponse = await axios.post(`${url}/categories`, catergory);
      console.log("the category created", catResponse.data);
      setCatergory(catergory => ({ ...catergory, ...catResponse.data }));
      if (catResponse.msg === 404) {
        alert(catResponse.msg);
      } else {
        localStorage.setItem("Product_Category", JSON.stringify(catResponse.data));
        alert('Category created');
        navigate("/cat");
      }
    } catch (error) {
      console.error("error creating category", error);
    }
  };

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
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
      
      <div className="greeting-area" style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: '10px 20px',
        borderRadius: '10px',
        marginBottom: '20px',
        fontSize: '1.2em',
        color: '#333',
        textAlign: 'center',
        zIndex: 1
      }}>
        Welcome, {loggedUser.store_name}
      </div>

      <div style={{
        width: "400px",
        backgroundColor: 'rgba(255, 255, 255, 1)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1
      }}>
        <form className='categoryForm' onSubmit={createCatergory}>
          <h3 style={{ color: "#333", marginBottom: "20px", marginTop: "0px" }}>Category Creation Form</h3>
          <div style={{ color: "red" }}>
            <p> NOTE: Fields with asterisks are required!!</p>
          </div>
          <div className="category-form" style={{ marginBottom: "20px" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Category Name **</label>
            <input type="text" name="name" className='category-name' required placeholder="Required"
              value={catergory.name}
              onChange={e => setCatergory({ ...catergory, name: e.target.value })}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }} />
          </div>
          <div className="category-form" style={{ marginBottom: "20px" }}>
            <label htmlFor="image" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Category Image</label>
            <input type="file" name="image" className='category-image'
              value={catergory.image}
              onChange={e => setCatergory({ ...catergory, image: e.target.value })}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc"
              }} />
          </div>
          <button className='btn btn-success' style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            fontWeight: "bold",
            fontSize: "1em"
          }}>Create Category</button>
          <Link to='/' className='btn btn-primary' style={{
            display: "block",
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            textAlign: "center",
            marginTop: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1em"
          }}>Back</Link>
          <div style={{ textAlign: "center", marginTop: "20px", color: "#333" }}>
            Already created a category? Then, <Link to="/cat" style={{ color: 'blue', textDecoration: 'underline' }}>Click Here</Link>!!!
          </div>
        </form>
      </div>
    </div>
  );
};

export default Category;
