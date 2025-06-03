import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ from, to, departureDate, returnDate, passengers });
    navigate("/results"); 
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Search Flights</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>From:</label>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>
        <div>
          <label>To:</label>
          <input value={to} onChange={(e) => setTo(e.target.value)} required />
        </div>
        <div>
          <label>Departure Date:</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Return Date:</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
        <div>
          <label>Passengers:</label>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            min="1"
            required
          />
        </div>
        <button type="submit">Search Flights</button>
      </form>
    </div>
  );
}

export default SearchPage;
