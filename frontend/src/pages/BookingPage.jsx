import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const flight = location.state;

  const [name, setName] = useState('');
  const [passport, setPassport] = useState('');
  const [email, setEmail] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    console.log({ name, passport, email, flight });
    navigate('/success', { state: { name, flight } });
  };

  if (!flight) {
    return <p>No flight selected. Please go back and choose a flight.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Booking Flight</h1>
      <h2>{flight.from} → {flight.to}</h2>
      <p><strong>Airline:</strong> {flight.airline}</p>
      <p><strong>Departure:</strong> {flight.departure}</p>
      <p><strong>Arrival:</strong> {flight.arrival}</p>
      <p><strong>Price:</strong> {flight.price}</p>

      <form onSubmit={handleBooking} style={{ marginTop: '2rem' }}>
        <div>
          <label>Full Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Passport Number:</label>
          <input value={passport} onChange={(e) => setPassport(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">Book Flight</button>
      </form>
    </div>
  );
}

export default BookingPage;
