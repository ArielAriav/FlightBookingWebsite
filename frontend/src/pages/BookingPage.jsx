import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state;

  const [name, setName] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    console.log({ name, passport, email, flight });
    navigate("/success", { state: { name, flight } });
  };

  if (!flight) {
    return (
      <div className="container">
        <h2>No flight selected.</h2>
        <button onClick={() => navigate("/")}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Booking Flight</h1>

      <div className="flight-card">
        <h2>
          {flight.from} → {flight.to}
        </h2>
        <p>
          <strong>Airline:</strong> {flight.airline}
        </p>
        <p>
          <strong>Departure:</strong> {flight.departure}
        </p>
        <p>
          <strong>Arrival:</strong> {flight.arrival}
        </p>
        <p>
          <strong>Price:</strong> {flight.price}
        </p>

        <form onSubmit={handleBooking}>
          <div>
            <label>Full Name:</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Passport Number:</label>
            <input
              value={passport}
              onChange={(e) => setPassport(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="primary-button">
              Book Flight
            </button>
            <button
              type="button"
              onClick={() => navigate("/results")}
              className="primary-button outline"
            >
              Back to Resultes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
