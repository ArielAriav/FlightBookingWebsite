import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingsResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { results } = location.state || {};

  if (!results || results.length === 0) {
    return (
      <div className="container">
        <h2>No bookings found for the provided details.</h2>
        <button className="primary-button" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Your Bookings</h1>
      {results.map((booking, idx) => (
        <div key={idx} className="booking-card">
          <p><strong>Name:</strong> {booking.full_name}</p>
          <p><strong>From:</strong> {booking.from_city}</p>
          <p><strong>To:</strong> {booking.to_city}</p>
          <p><strong>Date:</strong> {booking.flight_date}</p>
          <p><strong>Time:</strong> {booking.flight_time}</p>
          <p><strong>Airline:</strong> {booking.airline}</p>
          <p><strong>Booking Time:</strong> {new Date(booking.booking_time).toLocaleString()}</p>
        </div>
      ))}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="primary-button" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default BookingsResultsPage;
