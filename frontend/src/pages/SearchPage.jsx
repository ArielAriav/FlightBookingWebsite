import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/flights");
      const data = await response.json();

      navigate("/results", {
        state: {
          flights: data,
          search: {
            from,
            to,
            departureDate,
            returnDate,
            passengers,
            isRoundTrip,
          },
        },
      });
    } catch (error) {
      console.error("Error fetching flights:", error);
      alert("Failed to fetch flights. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1 className="page-header">Search Flights</h1>
      <form onSubmit={handleSubmit}>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              className="roundtrip-checkbox"
              checked={isRoundTrip}
              onChange={() => setIsRoundTrip(!isRoundTrip)}
            />
            &nbsp;Round Trip
          </label>
        </div>

        <div>
          <label>From:</label>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            
          />
        </div>

        <div>
          <label>To:</label>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            
          />
        </div>

        <div>
          <label>Departure Date:</label>
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            
          />
        </div>

        <div>
          <label>Return Date:</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            disabled={!isRoundTrip}
            className={!isRoundTrip ? "disabled-input" : ""}
          />
        </div>

        <div>
          <label>Passengers:</label>
          <input
            type="number"
            value={passengers}
            onChange={(e) => setPassengers(Number(e.target.value))}
            min="1"
            
          />
        </div>

        <div className="button-row">
          <button type="button" className="ghost-button" onClick={() => navigate("/")}>
            ← Back to Home
          </button>
          <button type="submit" className="primary-button">
            Search Flights
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchPage;
