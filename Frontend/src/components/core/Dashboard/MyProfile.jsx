import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
function MyProfile() {
  const [language, setLanguage] = useState("ENGLISH");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const handleProfileMenuToggle = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  const handleLanguageMenuToggle = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };

  return (
    <div className="Apppi">
      <nav className="sidebar">
        <div className="logo">
          <h2>Indore Municipal Council</h2>
        </div>
        <ul>
          <li>Complaints</li>
          <li><Link to="/propertytax">Property Tax</Link></li>
          <li>Fire NOC</li>
          <li><Link to="/receipt">Check Payment Status</Link></li>
          <li><Link to="/onlinebuilding">Online Building Plan</Link></li>
          <li><Link to="/watertax">Water Tax</Link></li>
        </ul>
      </nav>
        <div className="contentDasvir">
          <section className="services">
            <Link to="/watertax"><div className="service-card">Water Tax</div></Link>
            <Link to="/garbagetax"><div className="service-card">Garbage Tax</div></Link>
            <Link to="/complaint"><div className="service-card">Complaints</div></Link>
            <Link to="/propertytax"><div className="service-card">Property Tax</div></Link>
            <Link to="/propertytax"><div className="service-card">Fire Noc</div></Link>
          </section>
        </div>
      </div>
  );
}
export default MyProfile;

