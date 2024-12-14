import React from "react";
import "./Complaint.css";
import { Link } from "react-router-dom";
function Complaint() {
  return (

    <div className="App">
      <div className="container">
        <div className="card">
          <div className="icon">➕</div>
          <div className="title"><Link to="/filecomplaint">File Complaint</Link></div>
        </div>
        <div className="card">
          <div className="icon">👤❗</div>
          <div className="title">My Complaints (0)</div>
        </div>
      </div>
      <div className="updates">Updates</div>
    </div>
  );
}

export default Complaint