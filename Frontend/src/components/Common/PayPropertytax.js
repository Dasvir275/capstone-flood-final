import React, { useState } from "react";
import axios from "axios";
import "./style1.css";
import Alert from "./Alert";
import {loadStripe} from '@stripe/stripe-js';
import Success from "./Success";
function PayPropertyTax() {
  const [city, setCity] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [locality, setLocality] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [taxAmount, setTaxAmount] = useState([]);
  const [error, setError] = useState(null);
  const [combinedata,setdata]=useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [pid,setpid]=useState();
  const handleSearch = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/p/getpropertytax', { pid: propertyId });
      // Ensure that taxAmount is an array and not null
      setTaxAmount(taxAmount.concat(response.data.taxAmount || []));
      setMobileNo(response.data.phoneNumber);
      setOwnerName(response.data.name);
      setLocality(response.data.locality);
      setpid(response.data.pid);
      setdata([
        {
          name: "Property Tax",
          taxAmount: response.data.taxAmount,
        }
      ]); // Ensure data is an array
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.message : err.message);
    }
  };
  
  const handlePayNow = async() => {
    const stripe = await loadStripe("pk_test_51Ph5HV2MW3uATXl1wb1lShtOekVQD01SK4HSAwsIt2TdMA1sP9bxF6wfc4JAOAOEPPMeYDCEYk2AS0RjFhkp1aGK00muArA1xf");
    
    // Ensure combinedata is an array
    const body = { products: combinedata || [], pid: pid };
  
    const headers = {
      "Content-Type": "application/json"
    };
    
    try {
      const response = await fetch("http://localhost:4000/api/create-checkout-session", {
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
        <Success/>
      console.error('Error during checkout:', error);
    }
  };
  
  const handleReset = () => {
    setCity("");
    setPropertyId("");
    setMobileNo("");
    setLocality("");
    setOwnerName("");
    setTaxAmount(null);
    setError(null);
  };

 
  const citiesOfMadhyaPradesh = [
    "Bhopal",
    "Indore",
    "Gwalior",
    "Jabalpur",
    "Ujjain",
    "Sagar",
    "Dewas",
    "Satna",
    "Ratlam",
    "Rewa",
    "Murwara",
    "Singrauli",
    "Burhanpur",
    "Khandwa",
    "Bhind",
    "Chhindwara",
    "Guna",
    "Shivpuri",
    "Vidisha",
    "Chhatarpur",
    "Damoh",
    "Mandsaur",
    "Hoshangabad",
    "Itarsi",
    "Sehore",
    "Datia",
    "Nagda",
    "Seoni",
    "Morena",
    "Betul",
    "Neemuch",
    "Pithampur",
    "Harda",
    "Dhar",
    "Khargone",
    "Mandla",
    "Sheopur",
    "Tikamgarh",
    "Shahdol",
    "Ganjbasoda",
    "Ashok Nagar",
    "Shajapur",
    "Gadarwara",
    "Jaora",
    "Panna",
    "Bakshwaho",
    "Rajgarh",
    "Maihar",
    "Manasa",
    "Pandhurna",
    "Malajkhand",
    "Dindori",
    "Anuppur",
    "Pipariya",
    "Sarni",
    "Sihora",
    "Barwani",
    "Balaghat",
    "Shujalpur",
    "Katni",
    "Parasia",
    "Bina",
    "Sausar",
    "Umaria",
    "Lahar",
    "Narsinghpur",
    "Nowgong",
    "Mandideep",
    "Narsinghgarh",
    "Shahpur",
    "Pachore",
    "Gohad",
    "Daboh",
    "Raghogarh-Vijaypur",
    "Porsa",
    "Maihar",
    "Khurai",
    "Nagod",
    "Pipliya Mandi",
    "Mahidpur",
    "Sarni",
    "Pachore",
    "Lahar",
    "Nagod",
    "Lahar",
    "Porsa",
    "Nagod",
    "Seondha",
    "Sheopur",
  ];

  const localitiesOfIndore = [
    "Annapurna",
    "Vijay Nagar",
    "Rajendra Nagar",
    "Palasia",
    "Mhow",
    "Rau",
    "MIG Colony",
    "Geeta Bhawan",
    "Saket Nagar",
    "Khajrana",
    "Sudama Nagar",
    "Indrapuri",
    "Sneh Nagar",
    "Tilak Nagar",
    "Scheme 54",
    "Scheme 78",
    "Nipania",
    "Bombay Hospital",
    "Patnipura",
    "Bhavarkuan",
    "Gumasta Nagar",
  ];

  return (
    <div className="Appdd">
      <div className="form-container">
        {/* <div className="tab">
          <button className="tablinks">Search Property</button>
          <button className="tablinks">Search Application</button>
        </div> */}
        <div className="form-content">
          <h3>Search Property</h3>
          <div className="form-group">
            <label>ULB</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              {citiesOfMadhyaPradesh.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Property ID*</label>
            <input
              type="text"
              value={propertyId}
              onChange={(e) => setPropertyId(e.target.value)}
              placeholder="Enter Existing Property ID"
            />
          </div>
          <div className="form-group">
            <label>Owner Mobile No.</label>
            <input
              type="text"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              placeholder="Enter your mobile No."
            />
          </div>
          <div className="form-group">
            <label>Locality/Mohalla</label>
            <select
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
            >
              <option value="">Select Locality/Mohalla</option>
              {localitiesOfIndore.map((locality) => (
                <option key={locality} value={locality}>
                  {locality}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Owner Name</label>
            <input
              type="text"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              placeholder="Owner Name"
            />
          </div>
          <div className="form-actions">
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
      {taxAmount.length > 0 && (
        <div className="table-container">
          <h3 className="success-message">Generated Tax Amount: {taxAmount.join(", ")}</h3>
          <table>
            <thead>
              <tr>
                <th>Property ID</th>
                <th>Owner Name</th>
                <th>Mobile No.</th>
                <th>Tax Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{propertyId}</td>
                <td>{ownerName}</td>
                <td>{mobileNo}</td>
                <td>
                  <button className="pay-now-btn" onClick={handlePayNow}>
                    <h2>Pay Now</h2> {taxAmount.join(", ")}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {error && (
        <div className="error-message">
          <h3>Error: {error}</h3>
        </div>
      )}
      {showAlert && <Alert taxAmount={taxAmount} onClose={() => setShowAlert(false)} />}
    </div>
  );
}

export default PayPropertyTax;