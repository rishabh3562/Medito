import React from "react";
import "../Components/landing page/style.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/landing page/HeroSection";
import Features from "../Components/landing page/Features";
import Icons from "../Components/landing page/Icons";
import Doctors from "../Components/landing page/Doctors";
import Review from "../Components/landing page/Review";
function LandingPageScreen() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Navbar />

          <Hero />
          <Features />

          <section className="search-section">
            <h2 className="search-heading">
              Find Appointment to Your Nearest Hospital
            </h2>
            <div className="search-bar">
              <input type="text" placeholder="Search.." />
              <a href="#">
                <i className="fa fa-search"></i>
              </a>
            </div>
          </section>

          <Icons />

          <Doctors />
          <Review />
        </div>
      </div>
    </>
  );
}

export default LandingPageScreen;
