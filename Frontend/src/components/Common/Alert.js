// Alert.js
import React from 'react';
import './Alert.css'; // Import the CSS file for styling

function Alert({ taxAmount, onClose }) {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <h2>Confirm Payment</h2>
        <p>Are you sure you want to pay <strong>${taxAmount}</strong>?</p>
        <div className="alert-actions">
          <button className="alert-button confirm" onClick={() => {
            // Add your payment processing logic here
            onClose();
            alert('Payment processed successfully!');
          }}>Confirm</button>
          <button className="alert-button cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
