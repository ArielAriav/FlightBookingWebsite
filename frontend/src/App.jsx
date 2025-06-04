import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import ResultsPage from './pages/ResultsPage';
import BookingPage from './pages/BookingPage';
import SuccessPage from './pages/SuccessPage';
import HomePage from './pages/HomePage';
import ViewBookingsPage from './pages/ViewBookingsPage';
import BookingsResultsPage from './pages/BookingsResultsPage';

function App() {
   return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/booking" element={<BookingPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/view-bookings" element={<ViewBookingsPage />} />
      <Route path="/bookings-results" element={<BookingsResultsPage />} />
    </Routes>
  );
}

export default App;
