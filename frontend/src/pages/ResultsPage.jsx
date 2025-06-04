import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResultsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const flights = location.state?.flights || [];

  return (
    <div className="container">
      <div className="results-header">
        <button onClick={() => navigate("/search")} className="ghost-button">
          ← Back to Search
        </button>
        <h1 className="results-title">Available Flights</h1>
      </div>

      <div className="results-grid">
        {flights.length > 0 ? (
          flights.map((flight) => (
            <div key={flight.id} className="flight-card">
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
              <div className="button-group">
                <button
                  onClick={() => navigate("/booking", { state: flight })}
                  className="primary-button"
                >
                  Select
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No flights found.</p>
        )}
      </div>
    </div>
  );
}

export default ResultsPage;
