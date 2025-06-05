import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, flight, passengers } = location.state || {};

  if (!flight || !name) {
    return (
      <div className="container page-header">
        <h2>No booking found.</h2>
        <button className="primary-button" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    );
  }

  const bookingNumber = "ORD" + Math.floor(Math.random() * 9000 + 1000);

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Booking Confirmed!</h1>
      </div>

      <div className="flight-info">
        <h2 style={{ textAlign: "center" }}>Thank you, {name} 🎉</h2>
        <p><strong>Booking Number:</strong> #{bookingNumber}</p>
        <p><strong>Flight:</strong> {flight.from_city} → {flight.to_city}</p>
        <p><strong>Date:</strong> {new Date(flight.flight_date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {flight.flight_time}</p>
        <p><strong>Seats:</strong> {passengers}</p>

        <div className="button-group">
          <button className="primary-button" onClick={() => navigate("/search")}>
            Search Again
          </button>
          <button className="primary-button" onClick={() => navigate("/")}>
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
