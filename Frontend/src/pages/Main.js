import React from "react";
import "./Main.css";
import floodImage from "../images/flood.jpg"; // Add a flood-related image in the 'images' folder
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="homepage">
      <img src={floodImage} alt="Flood" className="flood-image" />
      <div className="homepage-content">
        <h1>Flood Inundation Mapper</h1>
        <p>Utilizing spatial analysis to predict and manage flood risks.</p>
        <Link to="/forecast" className="homepage-button">Flood forecast</Link>
      </div>
    </div>
  );
};

export default Main;
