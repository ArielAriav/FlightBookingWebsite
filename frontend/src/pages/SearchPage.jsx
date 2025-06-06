import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { displayAirport } from "../airportData";

function SearchPage() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [airports, setAirports] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAirports() {
      try {
        const res = await fetch(
          "https://flight-booking-website-backend-service.onrender.com/flights"
        );
        const flights = await res.json();
        const unique = Array.from(
          new Set(flights.flatMap((f) => [f.from_city, f.to_city]))
        );
        setAirports(unique);
      } catch (err) {
        console.error("Error fetching airports:", err);
      }
    }
    fetchAirports();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://flight-booking-website-backend-service.onrender.com/flights");
      const data = await response.json();
      console.log("Flights data from server:", data);


      navigate("/results", {
        state: {
          flights: data,
          search: {
            from,
            to,
            departureDate,
            passengers,
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

        <div>
          <label>From:</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="">Select origin</option>
            {airports.map((ap) => (
              <option key={ap} value={ap}>
                {displayAirport(ap)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>To:</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value="">Select destination</option>
            {airports.map((ap) => (
              <option key={ap} value={ap}>
                {displayAirport(ap)}
              </option>
            ))}
          </select>
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
