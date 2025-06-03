import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container home-page">
      <div className="home-content">
        <h1 className="page-title">Welcome to SkyBook ✈️</h1>
        <p className="home-subtitle">
          Your gateway to finding the perfect flight with ease and style.
        </p>
        <button className="primary-button" onClick={() => navigate("/search")}>
          Let's Search a Flight
        </button>
      </div>
    </div>
  );
}

export default HomePage;
