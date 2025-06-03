import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, flight } = location.state || {};

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

  const bookingNumber = "ORD" + Math.floor(Math.random() * 1000 + 100);

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">Booking Confirmed!</h1>
      </div>

      <div className="flight-info">
        <h2 style={{ textAlign: "center" }}>Thank you, {name} 🎉</h2>
        <p><strong>Booking Number:</strong> #{bookingNumber}</p>
        <p><strong>Flight:</strong> {flight.from} → {flight.to}</p>
        <p><strong>Airline:</strong> {flight.airline}</p>
        <p><strong>Departure:</strong> {flight.departure}</p>
        <p><strong>Arrival:</strong> {flight.arrival}</p>
        <p><strong>Price:</strong> {flight.price}</p>

        <div className="button-group">
          <button className="primary-button" onClick={() => navigate("/search")}>
            Search Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
