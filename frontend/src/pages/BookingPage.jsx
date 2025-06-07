import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state;
  const passengers = location.state?.passengers || 1;

  const [name, setName] = useState("");
  const [passport, setPassport] = useState("");
  const [email, setEmail] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    const bookingData = {
      full_name: name,
      passport_number: passport,
      email,
      flight_id: flight.id,
      passengers: passengers,
    };

    try {
      const res = await fetch(
        "https://flight-booking-website-backend-service.onrender.com/api/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      if (res.ok) {
        navigate("/success", { state: { name, flight, passengers } });
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
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
          {flight.from_city} → {flight.to_city}
        </h2>
        <p>
          <strong>Date:</strong>{" "}
          {new Date(flight.flight_date).toLocaleDateString()}
        </p>
        <p>
          <strong>Time:</strong> {flight.flight_time}
        </p>
        <p>
          <strong>Available Seats:</strong> {flight.empty_seats}
        </p>

        <form onSubmit={handleBooking} className="booking-form">
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
              onClick={() => navigate("/search")}
              className="primary-button outline"
            >
              Back to Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
