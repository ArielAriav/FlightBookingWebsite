import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewBookingsPage() {
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://flight-booking-website-backend-service.onrender.com/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passport, email }),
    });

    const data = await response.json();

    if (response.ok) {
      navigate("/bookings/results", { state: { results: data } });
    } else {
      alert(data.error || "Search failed.");
    }
  } catch (error) {
    console.error("Error searching bookings:", error);
    alert("Server error.");
  }
};


  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">View My Bookings</h1>
      </div>

      <form onSubmit={handleSearch} className="booking-form">
        <div>
          <label>Passport Number:</label>
          <input
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button className="primary-button" type="submit">
            Search Bookings
          </button>
        </div>

        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button
            type="button"                // <--- חשוב: לא submit
            className="primary-button outline"
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </button>
        </div>
      </form>
    </div>
  );
}

export default ViewBookingsPage;
