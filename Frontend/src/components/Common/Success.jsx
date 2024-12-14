// Success.js
import React from 'react';
import './success.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function Success() {
  return (
    <div className="success-container">
      <div className="success-icon">
      </div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your payment. Your transaction has been completed successfully.</p>
      <Link to="http://localhost:3000/dashboard/my-profile">Return To Dashboard</Link>
    </div>
  );
}

export default Success;

