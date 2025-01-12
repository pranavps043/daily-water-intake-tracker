import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import './WaterIntakeTracker.css';


// Step 1: Initialize State Variables
function WaterIntakeTracker() {
  const [waterIntakes, setWaterIntakes] = useState([]);
  const [intakeAmount, setIntakeAmount] = useState("");
  const [intakeDate, setIntakeDate] = useState(""); // State for date input
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(2);
  const [editingIndex, setEditingIndex] = useState(null);
  const [date1, setDate1] = useState(""); // First date for comparison
  const [date2, setDate2] = useState(""); // Second date for comparison
  const [difference, setDifference] = useState(""); // Difference in water intake

  // Step 2: Load water intake data from localStorage on component mount
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const userEmail = loggedInUser.email;
      const savedWaterIntakes =
        JSON.parse(localStorage.getItem("waterIntakes_" + userEmail)) || [];
      setWaterIntakes(savedWaterIntakes);
    }
    // Set default date to today's date
    setIntakeDate(new Date().toISOString().split("T")[0]);
  }, []);
 // Step 3: Format date and time to be displayed in a user-friendly format
  const formatDateTime = (date) => {
    return new Intl.DateTimeFormat("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date);
  };
  // Step 4: Save updated water intake data to localStorage
  const saveWaterIntakesToLocalStorage = (updatedWaterIntakes) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const userEmail = loggedInUser.email;
      localStorage.setItem(
        "waterIntakes_" + userEmail,
        JSON.stringify(updatedWaterIntakes)
      );
    }
  };
  // Step 5: Add or update a water intake entry
  const addOrUpdateWaterIntake = () => {
    if (intakeAmount.trim() === "" || intakeAmount <= 0) {
      setError("Please enter a valid water intake amount.");
      return;
    }

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      setError("User not logged in!");
      return;
    }

    if (editingIndex !== null) {
     // Update existing water intake entry
      const updatedWaterIntakes = waterIntakes.map((entry, index) =>
        index === editingIndex
          ? { ...entry, amount: intakeAmount, dateTime: new Date(intakeDate) }
          : entry
      );
      setWaterIntakes(updatedWaterIntakes);
      saveWaterIntakesToLocalStorage(updatedWaterIntakes);
      setEditingIndex(null);
      setError("");
    } else {
       // Step 6: Check if there's already an intake entry for the selected date
      const selectedDate = new Date(intakeDate).toLocaleDateString();
      const todayEntry = waterIntakes.find(
        (entry) =>
          new Date(entry.dateTime).toLocaleDateString() === selectedDate
      );

      if (todayEntry) {
        setError("You can only add one water intake entry per day.");
        return;
      }

      // Step 7: Add a new water intake entry
      const newWaterIntake = {
        amount: intakeAmount,
        dateTime: new Date(intakeDate),
      };
      const updatedWaterIntakes = [...waterIntakes, newWaterIntake];
      setWaterIntakes(updatedWaterIntakes);
      saveWaterIntakesToLocalStorage(updatedWaterIntakes);
    }

    // Step 8: Reset input fields after adding/updating
    setIntakeAmount("");
    setIntakeDate(new Date().toISOString().split("T")[0]); // Reset date to today's date
    setError("");
  };
  // Step 9: Delete a water intake entry
  const deleteWaterIntake = (index) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      const updatedWaterIntakes = waterIntakes.filter((_, i) => i !== index);
      setWaterIntakes(updatedWaterIntakes);
      saveWaterIntakesToLocalStorage(updatedWaterIntakes);
    }
  };
  // Step 10: Start editing an existing water intake entry
  const startEditing = (index) => {
    setEditingIndex(index);
    setIntakeAmount(waterIntakes[index].amount);
    setIntakeDate(
      new Date(waterIntakes[index].dateTime).toISOString().split("T")[0]
    ); // Set date for editing
  };
 // Step 11: Cancel editing an existing entry
  const cancelEditing = () => {
    setEditingIndex(null);
    setIntakeAmount("");
    setIntakeDate(new Date().toISOString().split("T")[0]); // Reset date to today's date
    setError("");
  };
 // Step 12: Calculate the difference in water intake between two dates
  const calculateDifference = () => {
    if (!date1 || !date2) {
      setError("Please select both dates for comparison.");
      return;
    }

    const entry1 = waterIntakes.find(
      (entry) =>
        new Date(entry.dateTime).toLocaleDateString() ===
        new Date(date1).toLocaleDateString()
    );
    const entry2 = waterIntakes.find(
      (entry) =>
        new Date(entry.dateTime).toLocaleDateString() ===
        new Date(date2).toLocaleDateString()
    );

    if (!entry1 || !entry2) {
      setError("No water intake records found for one or both selected dates.");
      return;
    }

    const intakeDifference = Math.abs(entry1.amount - entry2.amount);
    setDifference(intakeDifference);
    setError("");
  };
  // Step 13: Pagination logic
  const indexOfLastIntake = currentPage * entriesPerPage;
  const indexOfFirstIntake = indexOfLastIntake - entriesPerPage;
  const currentWaterIntakes = waterIntakes.slice(
    indexOfFirstIntake,
    indexOfLastIntake
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Step 14: Render the component
  return (
    <div>
      <Navbar />
      <h2 className="text-center mb-4">Water Intake Tracker</h2>
      <input
        type="number"
        className="custom-input"
        value={intakeAmount}
        onChange={(e) => setIntakeAmount(e.target.value)}
        placeholder="Enter Water Intake (ml)"
      />
      <input
        type="date"
        className="custom-input ml-2"
        value={intakeDate}
        onChange={(e) => setIntakeDate(e.target.value)}
      />
      <button className="btn mt-3" onClick={addOrUpdateWaterIntake}>
        {editingIndex !== null ? "Update Water Intake" : "Add Water Intake"}
      </button>
      {editingIndex !== null && (
        <button className="btn mt-3 ml-2" onClick={cancelEditing}>
          Cancel
        </button>
      )}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="comparison-section mt-4">
        <h4>Compare Water Intake</h4>
        <input
          type="date"
          className="custom-input"
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        />
        <input
          type="date"
          className="custom-input ml-2"
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        />
        <button className="btn mt-3" onClick={calculateDifference}>
          Calculate Difference
        </button>
        {difference !== "" && (
          <div className="alert alert-info mt-3">
            Difference in water intake between {date1} and {date2}: {difference} ml
          </div>
        )}
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Amount (ml)</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentWaterIntakes.map((waterIntake, index) => (
            <tr key={index}>
              <td>{waterIntake.amount} ml</td>
              <td>{formatDateTime(new Date(waterIntake.dateTime))}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => startEditing(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger ml-2"
                  onClick={() => deleteWaterIntake(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <button
          className="btn"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          className="btn"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(waterIntakes.length / entriesPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default WaterIntakeTracker
