import React from "react";
import "./Onlinebuilding.css";
function Onlinebuildingplan() {
  const handleClick = () => {
    window.location.href =
      "https://mpakvnindore.com/index.php?page=online-building-map";
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Online Building Plan</h1>
        <div className="card">
          <p>Online Building Plan</p>
          <button className="btn" onClick={handleClick}>
            CLICK
          </button>
        </div>
      </div>
    </div>
  );
}
export default Onlinebuildingplan;
