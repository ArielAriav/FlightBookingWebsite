import React from "react";
import { useNavigate } from "react-router-dom";

const mockFlights = [
  {
    id: "TLV123",
    airline: "El Al",
    from: "Tel Aviv",
    to: "New York",
    departure: "2025-06-10 08:00",
    arrival: "2025-06-10 16:30",
    price: "$850",
  },
  {
    id: "LH456",
    airline: "Lufthansa",
    from: "Tel Aviv",
    to: "Berlin",
    departure: "2025-06-11 07:30",
    arrival: "2025-06-11 10:15",
    price: "$420",
  },
];

function ResultsPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="results-header">
        <button onClick={() => navigate("/search")} className="ghost-button">
          ← Back to Search
        </button>
        <h1 className="results-title">Available Flights</h1>
      </div>

      <div className="results-grid">
        {mockFlights.map((flight) => (
          <div key={flight.id} className="flight-card">
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
            <div className="button-group">
              <button
                onClick={() => navigate("/booking", { state: flight })}
                className="primary-button"
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
