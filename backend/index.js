const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express(); // ✅ App must be initialized before using it

// Middleware for handling CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Routes
const bookingsRoutes = require('./routes/bookings');
const flightsRoutes = require('./routes/flights');

app.use('/bookings', bookingsRoutes); // Booking-related routes
app.use('/flights', flightsRoutes);   // Flight-related routes

// Root route to test server availability
app.get('/', (req, res) => {
  res.send('Flight Booking API is running!');
});

// Start the server only when running this file directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for use in test files
module.exports = app;
