import React from 'react';
import './style.css';
function Sidebar() {
  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">Medito</span>
      </a>

      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="bx bx-plus-medical"></i>
            <span className="text">Doctors</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="bx bx-alarm"></i>
            <span className="text">Schedule</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="bx bx-bookmark"></i>
            <span className="text">Appointment</span>
          </a>
        </li>
      </ul>

      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="bx bx-log-out"></i>
            <span className="text">Log out</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Sidebar;
