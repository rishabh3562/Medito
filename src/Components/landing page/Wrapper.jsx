import React from 'react';
import './style.css'
function Wrapper() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="navbar">
          <div className="logo-container">
            <img className="logoIMG" src="images/pngegg (2).png" alt="" />
            <div className="logo-text">Medito</div>
          </div>
          <div className="nav-items">
            <div><a href="#">Home</a></div>
            <div><a href="#">About</a></div>
            <div><a href="#">Check Appointment</a></div>
            <div><a href="#">Booking</a></div>
            <div><a href="#">Contact</a></div>
            <button className="signup-btn">Sign up</button>
          </div>
        </div>

        <div className="hero-section">
          <div className="hero-section-left">
            <div className="hero-section-heading">About Us</div>
            <div className="hero-section-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem veniam iusto, non voluptates molestias
              quisquam veritatis harum laudantium et cum magni sit dignissimos voluptatum suscipit reiciendis odio quia.
              Suscipit debitis nam amet.
            </div>
            <div className="Explore-btn">
              <button className="btn-exp">Make Appointment</button>
            </div>
            <div className="shape">
              <img src="images/shape.png" alt="" width="100px" />
            </div>
          </div>

          <div className="hero-section-right">
            <div className="img1">
              <img src="images/casual-life-3d-female-doctor-standing-with-books.png" alt="" />
            </div>
            <div className="img2">
              <img src="images/casual-life-3d-doctor-with-syringe.png" alt="" />
            </div>
            <div className="animate-object">
              <img src="images/vecteezy_first-aid-illustration-3d_8521675_240.png" alt="" width="200px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
