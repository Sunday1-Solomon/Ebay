import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const Megamenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && ref.current &&!ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div style={{display:"", marginTop:"-80px"}} className="dropdown">
      <button ref={ref} onClick={toggleMenu} className="dropbtn">
        Select by category
        <i key="caret-down" className="fa fa-caret-down"></i>
      </button>
      {showMenu && (
        <div style={{marginLeft:"80px", marginTop:"150px"}} className="dropdown-content">
          <div className="row">
            <div className="column">
              <h3 style={{fontSize:"14px"}}>Category 1</h3>
              <Link to="/shop">Fashion</Link>
              {/* <a href="#">Link 2</a>
              <a href="#">Link 3</a> */}
            </div>
            <div className="column">
              <h3 style={{fontSize:"14px"}}>Category 2</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div className="column">
              <h3 style={{fontSize:"14px"}}>Category 3</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
            <div className="column">
              <h3 style={{fontSize:"14px"}}>Category 3</h3>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Megamenu;