import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./Appdash.css";
import { Link } from "react-router-dom";

const localities = [
  "WNo.1 - Sirapur",
  "WNo.2 - Chandan Nagar",
  "WNo.3 - Kaalaani Nagar",
  "WNo.4 - Sukhadev Nagar",
  "WNo.5 - Raaj Nagar",
  "WNo.6 - Malhaaraganj",
  "WNo.7 - Janata Colony",
  "WNo.8 - Joona Risaala",
  "WNo.9 - Vrindaavan",
  "WNo.10 - Baanaganga",
  "WNo.11 - Bhaageerathpura",
  "WNo.12 - Govind Colony",
  "WNo.13 - Sangamanagar",
  "WNo.14 - Ashok Nagar",
  "WNo.15 - Bijaasan",
  "WNo.16 - Nandabaag",
  "WNo.17 - Kushavaah Nagar",
  "WNo.18 - Sant Kabeer",
  "WNo.19 - Vishvakarma",
  "WNo.20 - Gauree Nagar",
  "WNo.21 - Shyaam Nagar",
  "WNo.22 - P.Dee.D.Upaa. Nagar",
  "WNo.23 - Sv. Raajesh Joshee",
  "WNo.24 - Sant Baaleejee Mahaaraaj",
  "WNo.25 - Nanda Nagar",
  "WNo.26 - Jeen Maata",
  "WNo.27 - Pashupati Naath",
  "WNo.28 - Maam Tulaja Bhavaanee",
  "WNo.29 - Dr Shyaamaaprasaad Mukharjee Nagar",
  "WNo.30 - Sant Ravidaas",
  "WNo.31 - Mahaaraaja Chhatrasaal",
  "WNo.32 - Atal Bihaaree Baajapeyee",
  "WNo.33 - Sookhaliya",
  "WNo.34 - Shaheed BhagatSinh",
  "WNo.35 - Lasudiya Moree",
  "WNo.36 - Nepaaniya",
  "WNo.37 - Saamee Kripa",
  "WNo.38 - Haajee Colony",
  "WNo.39 - Naaharasha Havelee",
  "WNo.40 - Khajaraana",
  "WNo.41 - Kailaashapuree",
  "WNo.42 - Swami Vivekaanand",
  "WNo.43 - Shreenagar",
  "WNo.44 - H.I.G.",
  "WNo.45 - Dr. Bheemrao Ambedkar",
  "WNo.46 - Somanaath",
  "WNo.47 - Saradaar Vallabh Bhai",
  "WNo.48 - Geeta Bhavan",
  "WNo.49 - Tilak Nagar",
  "WNo.50 - Brajeshvaree",
  "WNo.51 - Maam Bhagavatee Nagar",
  "WNo.52 - Musakkhedi",
  "WNo.53 - Dr Maulaana Aajaad Nagar",
  "WNo.54 - Residency",
  "WNo.55 - Saaooth Tukoganj",
  "WNo.56 - Snehalata Ganj",
  "WNo.57 - Devi Ahilyaabai",
  "WNo.58 - Emli Bazaar",
  "WNo.59 - Harasiddhee",
  "WNo.60 - Ranipuraa",
  "WNo.61 - Taatyaa Saravate",
  "WNo.62 - Raavajee Baazaar",
  "WNo.63 - Navalakha",
  "WNo.64 - Chitaavad",
  "WNo.65 - Sant Kavar Raam",
  "WNo.66 - Shaheed Hemu Kolonee",
  "WNo.67 - Mahaaraaja Holakar",
  "WNo.68 - Bambaee Baazaar",
  "WNo.69 - Jawaahar Maarg",
  "WNo.70 - Lok Naayak Nagar",
  "WNo.71 - Dravid Nagar",
  "WNo.72 - Lok Maanya Nagar",
  "WNo.73 - Lakshman Sinh Chauhaan",
  "WNo.74 - Vishnupuree",
  "WNo.75 - Paalada",
  "WNo.76 - Mundlaa Naayta",
  "WNo.77 - Billavali",
  "WNo.78 - Choithram",
  "WNo.79 - Sukhniwas",
  "WNo.80 - Dr Rajendra Prasaad",
  "WNo.81 - Annapurna",
  "WNo.82 - Sudaama Nagar",
  "WNo.83 - Gumaastaa Nagar",
  "WNo.84 - Dawaarkapuri",
  "WNo.85 - Prajaapat Nagar",
];
const revenueTypes = ["Property Tax", "Water Tax", "Garbage Collection Tax"];

const revenueData = {
  totalRevenue: 1000000,
  pendingRevenue: 250000,
  revenueByLocality: {
    "WNo.1 - Sirapur": {
      "Property Tax": 150000,
      "Water Tax": 40000,
      "Garbage Collection Tax": 20000,
    },
    "WNo.2 - Chandan Nagar": {
      "Property Tax": 200000,
      "Water Tax": 60000,
      "Garbage Collection Tax": 30000,
    },
    "WNo.3 - Kaalaani Nagar": {
      "Property Tax": 250000,
      "Water Tax": 70000,
      "Garbage Collection Tax": 25000,
    },
  },
};

function Admindashboard() {
  const [selectedLocality, setSelectedLocality] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleLocalityChange = (event) => {
    setSelectedLocality(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const getTotalRevenueByLocality = () => {
    if (!selectedLocality) return 0;
    const data = revenueData.revenueByLocality[selectedLocality] || {};
    return Object.values(data).reduce((a, b) => a + b, 0);
  };

  const getPendingRevenueByLocality = () => {
    if (!selectedLocality) return 0;
    const data = revenueData.revenueByLocality[selectedLocality] || {};
    const totalCollected = Object.values(data).reduce((a, b) => a + b, 0);
    return totalRevenue - totalCollected; // Assuming totalRevenue is the expected total for the locality
  };

  const getFilteredRevenue = () => {
    if (!selectedLocality || !selectedType) return 0;
    const data = revenueData.revenueByLocality[selectedLocality] || {};
    return data[selectedType] || 0;
  };

  const totalRevenue = revenueData.totalRevenue;
  const pendingRevenue = revenueData.pendingRevenue;

  const pieData = [
    { name: "Total Revenue", value: totalRevenue },
    { name: "Pending Revenue", value: pendingRevenue },
  ];

  return (
    <div>
      <section className="Main-header">
        <div className="header-container">
          <div className="headlogo">
            {/* <img
              className="logo-image"
              src="https://media.umangapp.in/app/ico/service/mp_mobile.png"
              alt=""
            /> */}
            {/* <h2>Revenue Management System</h2> */}
          </div>
          <div>
            <ul className="navbar-list">
              <li><Link to="/manageuser">Manage User</Link></li>
              <li><Link to="/recentpayment">Recent Payments</Link></li>
              <li>Pending Collections</li>
              <li>Receipt Collection</li>
              <li>Export Collection Report</li>
              <li>View Complaints</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="paras">
        <header className="Appi-header parasheader">
          <h1 className="pb-4 text-richblack-700">Municipal Revenue Management System</h1>

          <div className="dashboardParas">
            <div className="pie-chart-container">
              <PieChart width={400} height={400}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={150}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? "#0088FE" : "#FF8042"}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>

            <section className="admin-box">
              <h2 className="text-richblack-700">Admin Portal</h2>
              <div className="filters">
                <label>
                  Locality:
                  <select onChange={handleLocalityChange}>
                    <option value="">Select Locality</option>
                    {localities.map((locality) => (
                      <option key={locality} value={locality}>
                        {locality}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Revenue Type:
                  <select onChange={handleTypeChange}>
                    <option value="">Select Type</option>
                    {revenueTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="report">
                {selectedLocality && !selectedType && (
                  <div>
                    <p>
                      Total Revenue for {selectedLocality}: ₹
                      {getTotalRevenueByLocality()}
                    </p>
                    <p>
                      Pending Revenue for {selectedLocality}: ₹
                      {getPendingRevenueByLocality()}
                    </p>
                  </div>
                )}
                {selectedLocality && selectedType && (
                  <div>
                    <p>
                      Total Revenue for {selectedLocality} ({selectedType}): ₹
                      {getFilteredRevenue()}
                    </p>
                    <p>
                      Pending Revenue for {selectedLocality}: ₹
                      {revenueData.revenueByLocality[selectedLocality][
                        selectedType
                      ] || 0}
                    </p>
                  </div>
                )}
              </div>
            </section>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Admindashboard;

// text-richblack-700