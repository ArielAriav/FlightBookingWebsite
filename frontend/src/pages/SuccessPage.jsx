import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function SuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, flight } = location.state || {};

  if (!flight || !name) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>No booking found.</h2>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  const bookingNumber = 'ORD' + Math.floor(Math.random() * 1000 + 100); // יצירת מספר אקראי

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Booking Confirmed!</h1>
      <h2>Thank you, {name} 🎉</h2>
      <p><strong>Booking Number:</strong> #{bookingNumber}</p>
      <p><strong>Flight:</strong> {flight.from} → {flight.to}</p>
      <p><strong>Airline:</strong> {flight.airline}</p>
      <p><strong>Departure:</strong> {flight.departure}</p>
      <p><strong>Arrival:</strong> {flight.arrival}</p>
      <p><strong>Price:</strong> {flight.price}</p>
      <button onClick={() => navigate('/')}>Search Again</button>
    </div>
  );
}

export default SuccessPage;
