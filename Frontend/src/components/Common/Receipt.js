import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Receipt.css'; // Import the CSS file

const Receipt = ({ pid }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios.post('http://localhost:4000/api/payment-details', { pid });
        setPaymentDetails(response.data);
      } catch (err) {
        setError(err.response ? err.response.data.error : err.message);
      }
    };

    fetchPaymentDetails();
  }, [pid]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!paymentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      className="receipt"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Payment Receipt</h2>
      <p><strong>Payment ID:</strong> {paymentDetails.paymentId}</p>
      <p><strong>Amount:</strong> ₹{paymentDetails.amount / 100}</p>
      <p><strong>Currency:</strong> {paymentDetails.currency.toUpperCase()}</p>
      <p><strong>Status:</strong> {paymentDetails.status}</p>
      <p><strong>Property ID:</strong> {paymentDetails.pid}</p>
    </motion.div>
  );
};

export default Receipt;

