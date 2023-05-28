import React from 'react';
import './landing page/style.css'
import logo from "./landing page/images/pngegg (2).png"
import { Link } from 'react-router-dom';
function Navbar() {
  return (
  
      <>
        {/* Navbar */}
          <div className="navbar">
            <div className="logo-container">
              <img className="logoIMG" src={logo} alt="" />
              <div className="logo-text">Medito</div>
            </div>
            <div className="nav-items">
              <div><Link to={"/"}>Home</Link></div>
              <div><Link to={"/"}>About</Link></div>
              <div><a href="#">Check Appointment</a></div>
              <div><a href="#">Booking</a></div>
              <div><a href="#">Contact</a></div>
              <Link to={"/login"}> <button className="signup-btn">Sign in</button></Link>
              <label className="switch">
                <input type="checkbox" id="dark-mode-toggle" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        {/* </div> */}
 

      </>
  );
}

export default Navbar;
