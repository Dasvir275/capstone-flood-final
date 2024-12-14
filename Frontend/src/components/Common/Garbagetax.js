import React, { useEffect, useState } from 'react';
import './Garbagetax.css';
import axios from "axios";
import {loadStripe} from '@stripe/stripe-js';
import Success from "./Success";

function Garbagetax() {
  const [taxes, setTaxes] = useState([]);
  const [email, setEmail] = useState('ramanpreet1379@gmail.com'); // Example email
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchTaxes() {
      try {
        const response = await fetch(`http://localhost:4000/api/garbage-taxes`);
        if (response.ok) {
          const data = await response.json();
          setTaxes(data);

          // Calculate total amount due
          const totalAmount = data.reduce((sum, tax) => sum + tax.amountDue, 0);
          setTotal(totalAmount);
        } else {
          console.error('Failed to fetch garbage taxes');
        }
      } catch (error) {
        console.error('Error fetching garbage taxes', error);
      }
    }

    fetchTaxes();
  }, []);

  const handlePayNow = async () => {
    const stripe = await loadStripe("pk_test_51Ph5HV2MW3uATXl1wb1lShtOekVQD01SK4HSAwsIt2TdMA1sP9bxF6wfc4JAOAOEPPMeYDCEYk2AS0RjFhkp1aGK00muArA1xf");

    const body = { products: taxes, pid: 'some-placeholder-id' }; // Replace with your actual pid if needed

    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const response = await fetch("http://localhost:4000/api/create-premium-checkout-session", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.error('Error during checkout:', error);
    }
  };

  return (
    <div>
      <h1>Garbage Taxes</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Consumer ID</th>
            <th>Amount Due</th>
          </tr>
        </thead>
        <tbody>
          {taxes.map((tax) => (
            <tr key={tax._id}>
              <td>{tax.consumerId}</td>
              <td>${tax.amountDue}</td>
            </tr>
          ))}
          <tr>
            <td><strong>Total</strong></td>
            <td><strong>${total}</strong></td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handlePayNow}><strong>Pay ${total} Now</strong></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Garbagetax;
