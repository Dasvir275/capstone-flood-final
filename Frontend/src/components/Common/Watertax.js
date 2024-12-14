import React, { useState } from "react";
import "./Watertax.css";
function Watertax() {
  const [city, setCity] = useState("");
  const [consumerNumber, setConsumerNumber] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [oldConsumerNumber, setOldConsumerNumber] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleSearch = () => {
    // Implement search functionality here
    console.log({
      city,
      consumerNumber,
      propertyId,
      oldConsumerNumber,
      mobileNo,
    });
  };

  const handleReset = () => {
    setCity("");
    setConsumerNumber("");
    setPropertyId("");
    setOldConsumerNumber("");
    setMobileNo("");
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

  return (
    <div className="App">
      <h2>Search Water & Sewerage Connection</h2>
      <div className="form-container">
        <div className="form-group">
          <label>City *</label>
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
          <label>Consumer number</label>
          <input
            type="text"
            value={consumerNumber}
            onChange={(e) => setConsumerNumber(e.target.value)}
            placeholder="Enter Consumer Number"
          />
        </div>
        <div className="form-group">
          <label>Mobile No.</label>
          <input
            type="text"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            placeholder="Enter your mobile No"
          />
        </div>
        <div className="form-actions">
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Watertax;
