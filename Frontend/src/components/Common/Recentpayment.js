import React, { useState } from "react";
import "./Recentpayment.css";

function Recentpayment() {
  const [transactions, setTransactions] = useState([
    {
      id: "T001",
      type: "Property Tax",
      amount: "1000",
      date: "2024-07-01",
      status: "Success",
    },
    {
      id: "T002",
      type: "Water Tax",
      amount: "200",
      date: "2024-07-05",
      status: "Success",
    },
    {
      id: "T003",
      type: "Garbage Collection Tax",
      amount: "150",
      date: "2024-07-10",
      status: "Failed",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    id: "",
    type: "",
    amount: "",
    date: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const addTransaction = () => {
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({ id: "", type: "", amount: "", date: "", status: "" });
    setShowModal(false);
  };

  return (
    <div className="Appi1">
    <div style={{display:'flex',flexDirection:'column'}}>
        <div>
          -<h1 className="headingg">Municipal Revenue Management System</h1>
        </div>
        <div> Recent Transactions</div>
        <div>
        <button
          className="add-transaction-btn"
          onClick={() => setShowModal(true)}
        >
          Add Transaction
        </button>
        </div>
     
      </div>
      <div className="transactions">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`transaction ${transaction.status.toLowerCase()}`}
          >
            <h3>Transaction ID: {transaction.id}</h3>
            <p>Type: {transaction.type}</p>
            <p>Amount: ₹{transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>Status: {transaction.status}</p>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Add New Transaction</h2>
            <form>
              <label>Transaction ID</label>
              <input
                type="text"
                name="id"
                value={newTransaction.id}
                onChange={handleInputChange}
              />
              <label>Type</label>
              <input
                type="text"
                name="type"
                value={newTransaction.type}
                onChange={handleInputChange}
              />
              <label>Amount</label>
              <input
                type="number"
                name="amount"
                value={newTransaction.amount}
                onChange={handleInputChange}
              />
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={newTransaction.date}
                onChange={handleInputChange}
              />
              <label>Status</label>
              <select
                name="status"
                value={newTransaction.status}
                onChange={handleInputChange}
              >
                <option value="">Select Status</option>
                <option value="Success">Success</option>
                <option value="Failed">Failed</option>
              </select>
              <button type="button" onClick={addTransaction}>
                Add Transaction
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Recentpayment;

