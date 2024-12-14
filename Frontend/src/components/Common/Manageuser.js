import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./Manage.css";

function Manageuser() {
  const [action, setAction] = useState("");
  const [userData, setUserData] = useState({
    propertyId: "",
    citizenName: "",
    fatherName: "",
    age: "",
  });
  const [reminders, setReminders] = useState([
    // Example data
    {
      propertyId: "001",
      ownerName: "John Doe",
      fines: { property: 100, water: 50, garbage: 50 },
      city: "Patiala",
    },
    {
      propertyId: "002",
      ownerName: "Jane Smith",
      fines: { property: 100, water: 30, garbage: 20 },
      city: "Patiala",
    },
  ]);

  const handleActionChange = (event) => {
    setAction(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Unpaid Bills Reminder", 10, 10);
    reminders.forEach((reminder, index) => {
      doc.text(`Property ID: ${reminder.propertyId}`, 10, 20 + index * 50);
      doc.text(`Owner Name: ${reminder.ownerName}`, 10, 30 + index * 50);
      doc.text(
        `Property Fine: ${reminder.fines.property}`,
        10,
        40 + index * 50
      );
      doc.text(`Water Fine: ${reminder.fines.water}`, 10, 50 + index * 50);
      doc.text(`Garbage Fine: ${reminder.fines.garbage}`, 10, 60 + index * 50);
      doc.text(`City: ${reminder.city}`, 10, 70 + index * 50);
      doc.text("---", 10, 80 + index * 50);
    });
    doc.save("reminders.pdf");
  };

  return (
    <div className="Appi">
      <header className="Appi-header">
        <h1>Municipal Revenue Management System</h1>
      </header>
      <div className="content">
        <div className="dropdown">
          <select value={action} onChange={handleActionChange}>
            <option value="">Select Action</option>
            <option value="add">Add User</option>
            <option value="deactivate">Deactivate User</option>
            <option value="edit">Edit User</option>
          </select>
        </div>
        {action && (
          <div className="form-container">
            <form>
              <div className="form-group">
                <label>Property ID</label>
                <input
                  type="text"
                  name="propertyId"
                  value={userData.propertyId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Citizen Name</label>
                <input
                  type="text"
                  name="citizenName"
                  value={userData.citizenName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Father Name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={userData.fatherName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  name="age"
                  value={userData.age}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">
                {action.charAt(0).toUpperCase() + action.slice(1)} User
              </button>
            </form>
          </div>
        )}
        <div className="reminders">
          <h2>Urgent Reminders</h2>
          <ul>
            {reminders.map((reminder, index) => (
              <li key={index} className="reminder-item">
                <h3>Property ID: {reminder.propertyId}</h3>
                <p>Owner Name: {reminder.ownerName}</p>
                <p>Property Fine: {reminder.fines.property}</p>
                <p>Water Fine: {reminder.fines.water}</p>
                <p>Garbage Fine: {reminder.fines.garbage}</p>
                <p>City: {reminder.city}</p>
              </li>
            ))}
          </ul>
          <button onClick={generatePDF}>Download Reminder PDF</button>
        </div>
      </div>
    </div>
  );
}

export default Manageuser;
