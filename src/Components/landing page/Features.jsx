import React from "react";

const ServicesItems = [
  {
    icon: "fas fa-notes-medical",
    text: "free checkups",
    para: "Hello i am Rishabh Dubey and ",
  },
  {
    icon: "fas fa-ambulance",
    text: "24/7 ambulance",
    para: "Hello i am Rishabh Dubey and ",
  },
  {
    icon: "fas fa-user-md",
    text: "Expert Doctors",
    para: "Hello i am Rishabh Dubey and ",
  },

  {
    icon: "fas fa-pills",
    text: "medicines",
    para: "Hello i am Rishabh Dubey and ",
  },
  {
    icon: "fas fa-procedures",
    text: "Bed facility",
    para: "Hello i am Rishabh Dubey and ",
  },
  {
    icon: "fas fa-notes-medical",
    text: "fas fa-heartbeat",
    para: "Hello i am Rishabh Dubey and ",
  },
];

const ServiceTile = ({ icon, text, para }) => {
  return (
    <>
      <div className="box">
        <i className={icon}></i>
        <h3>{text}</h3>
        <p className="para-subheading">{para} </p>
      </div>
    </>
  );
};
const ServicesSection = () => {
  return (
    <>
      <div className="features">
        {ServicesItems.map((item) => {
          return (
            <>
              <ServiceTile icon={item.icon} text={item.text} para={item.para} />
            </>
          );
        })}
        {/* <ServiceTile icon={ServicesItems[0].icon}/> */}
      </div>
    </>
  );
};

const Features = () => {
  return (
    <>
      <section className="features-section">
        <div className="features-heading">
          <p className="head-1">Our Services</p>
          <h2 className="head-2">Services We provide</h2>
        </div>
        <ServicesSection />
        {/* <div className="features">
           <ServiceTile/>

          

            

           
          </div> */}
      </section>
    </>
  );
};

export default Features;
