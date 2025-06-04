// src/pages/BookingResultsPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];

  return (
    <div className="container">
      <h1 className="page-title">My Bookings</h1>

      {results.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <div className="results-list">
          {results.map((booking) => (
            <div key={booking.id} className="result-card">
              <h3>{booking.full_name}</h3>
              <p><strong>Passport:</strong> {booking.passport_number}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Booking Time:</strong> {new Date(booking.booking_time).toLocaleString()}</p>
              <p><strong>From:</strong> {booking.from_city}</p>
              <p><strong>To:</strong> {booking.to_city}</p>
              <p><strong>Date:</strong> {booking.flight_date}</p>
              <p><strong>Time:</strong> {booking.flight_time}</p>
              <p><strong>Seats Left:</strong> {booking.empty_seats}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <button className="primary-button outline" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default BookingResultsPage;
