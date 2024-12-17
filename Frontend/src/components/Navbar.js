import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-container">
      {!isOpen && (
        <button
          className="menu-button"
          onClick={toggleNavbar}
          aria-label="Open Menu"
        >
          ☰
        </button>
      )}

      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/home" onClick={closeNavbar}>
              Home
            </NavLink>
          </li>
          <li>
            <a href="https://weather-live-snowy.vercel.app/">
            Weather Forecasted
            </a>
            
          </li>
          <li>
            <NavLink to="/rescue" onClick={closeNavbar}>
              Rescue & Alert
            </NavLink>
          </li>
          <li>
            <NavLink to="/forecast" onClick={closeNavbar}>
              Polavaram Flood Forecast
            </NavLink>
          </li>
          <li>
            <NavLink to="/pongdam" onClick={closeNavbar}>
              Pong Dam Flood Forecast
            </NavLink>
          </li>
          <li>
            <NavLink to="/bhakhra" onClick={closeNavbar}>
              Bhakra Dam Flood Forecast
            </NavLink>
          </li>
          <li>
            <NavLink to="/kulumanali" onClick={closeNavbar}>
              Kulu Manali Flood Forecast
            </NavLink>
          </li>
          <li>
            <NavLink to="/patiala" onClick={closeNavbar}>
              Patiala Flood Forecast
            </NavLink>
          </li>
        </ul>
        <button
          className="close-button"
          onClick={toggleNavbar}
          aria-label="Close Menu"
        >
          &times;
        </button>
      </nav>

      {isOpen && <div className="backdrop" onClick={toggleNavbar}></div>}
    </div>
  );
};

export default Navbar;


