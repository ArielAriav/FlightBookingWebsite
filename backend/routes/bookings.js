// routes/bookings.js

const express = require('express');
const router = express.Router();

// In-memory storage for bookings
let bookings = [];
let currentId = 1;

/**
 * GET /bookings
 * Returns the list of all bookings.
 */
router.get('/', (req, res) => {
  res.status(200).json(bookings);
});

/**
 * POST /bookings
 * Creates a new booking if required fields are present.
 */
router.post('/', (req, res) => {
  const { fullName, email, flightNumber } = req.body;

  if (!fullName || !email || !flightNumber) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newBooking = {
    id: currentId++,
    fullName,
    email,
    flightNumber,
  };

  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

/**
 * PUT /bookings/:id
 * Updates an existing booking if found.
 */
router.put('/:id', (req, res) => {
  const bookingId = parseInt(req.params.id);
  const booking = bookings.find(b => b.id === bookingId);

  if (!booking) {
    return res.status(404).json({ error: 'Booking not found' });
  }

  const { fullName, email, flightNumber } = req.body;
  if (fullName) booking.fullName = fullName;
  if (email) booking.email = email;
  if (flightNumber) booking.flightNumber = flightNumber;

  res.status(200).json(booking);
});

/**
 * DELETE /bookings/:id
 * Deletes an existing booking if found.
 */
router.delete('/:id', (req, res) => {
  const bookingId = parseInt(req.params.id);
  const index = bookings.findIndex(b => b.id === bookingId);

  if (index === -1) {
    return res.status(404).json({ error: 'Booking not found' });
  }

  bookings.splice(index, 1);
  res.status(200).json({ message: 'Booking deleted' });
});

module.exports = router;
