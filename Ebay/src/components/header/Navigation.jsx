import React, { useEffect, useState } from "react";
import img1 from "../../images/ebay-logo-1-1200x630-margin.png";
import { Link, useNavigate } from "react-router-dom";
import { FcShop } from "react-icons/fc";
import { GoSearch } from "react-icons/go";
import axios from "axios";


const Navigation = () => {
  const BASE_URL = "http://ecommerce.reworkstaging.name.ng/v2";
  const merchantInfo = JSON.parse(localStorage.getItem("Task_Manager_User"));
  const merchantId = merchantInfo?.id;

  const [categoryData, setCategoryData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMerchantCategory = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/categories?merchant_id=${merchantId}`);
        console.log("Categories successfully fetched =>", response.data);
        setCategoryData(response.data);
      } catch (error) {
        console.error("Error while fetching categories =>", error);
      }
    };

    fetchMerchantCategory();
  }, [merchantId]);

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    if (categoryId) {
      navigate(`/shop?category_id=${categoryId}`);
    }
  };

  return (
    <div>
      <div></div>
      <nav
        style={{ height: "80px" }}
        className="navbar navbar-expand-lg bg-body overflow-hidden p-0 border-bottom border-top"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={img1} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <div style={{ display: "flex", border: "2px solid black" }}>
                <input
                  style={{ width: "530px" }}
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for anything"
                  aria-label="Search"
                />
                <select name="categories" id="categories" onChange={handleCategoryChange}>
                  <option value="">Select Category</option>
                  {categoryData.map((category, index) => (
                    <option key={index} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <button className="SearchBtn" type="submit">
                Search
              </button>
              <span>Advance</span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
