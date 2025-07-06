// src/pages/BookingResultsPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const results = location.state?.results || [];

  return;
}

export default BookingResultsPage;
