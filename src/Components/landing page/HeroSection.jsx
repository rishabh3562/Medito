import React from 'react'
import FemaleDoctor from "./images/casual-life-3d-female-doctor-standing-with-books.png"
import MaleDoctor from "./images/casual-life-3d-doctor-with-syringe.png"
import obj1 from "./images/vecteezy_first-aid-illustration-3d_8521675_240.png"
import obj2 from "./images/vecteezy_emergency-call-to-hospital-for-diagnostic-health_21658608_814.png"
import obj3 from "./images/vecteezy_3d-patient-heart-checkup-concept-icon_21164725_509.png"
// import MaleDoctor from "./images/casual-life-3d-doctor-with-syringe.png"
const About = () => {
  return (
    <>
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
              <img src={FemaleDoctor} alt="" />
            </div>

            <div className="img2">
              <img src={MaleDoctor} alt="" />
            </div>

            <div className="animate-object-1">
              <img src={obj1} alt="" width="200px" />
            </div>

            <div className="animate-object-2">
              <img src={obj2} alt="" width="170px" />
            </div>

            <div className="animate-object-3">
              <img src={obj3} alt="" width="200px" />
            </div>
          </div>
        </div> 
    </>
  )
}

export default About
