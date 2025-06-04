import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container home-page">
      <div className="home-content" style={{ textAlign: "center" }}>
        <h1 className="page-title">Welcome to SkyBook ✈️</h1>
        <p className="home-subtitle">
          Your gateway to finding the perfect flight with ease and style.
        </p>

        <button
          className="primary-button"
          onClick={() => navigate("/search")}
          style={{ width: "220px", marginBottom: "1rem" }}
        >
          Let's Search a Flight
        </button>

        <br />

        <button
          className="primary-button"
          onClick={() => navigate("/view-bookings")}
          style={{ width: "220px" }}
        >
          View My Bookings
        </button>
      </div>
    </div>
  );
}

export default HomePage;
