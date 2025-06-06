const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
app.use(cors());
app.use(express.json());

// PostgreSQL connection setup
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // נדרש עבור Render
  },
});

// GET all flights
app.get('/flights', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM flights');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search booking
app.post('/search', async (req, res) => {
  const { passport, email } = req.body;

  if (!passport || !email) {
    return res.status(400).json({ error: "Passport and email are required" });
  }

  try {
    const result = await pool.query(
      `SELECT b.id, b.full_name, b.passport_number, b.email, b.booking_time, b.seats, f.from_city, f.to_city,
              f.flight_date, f.flight_time, f.empty_seats
       FROM bookings b
       JOIN flights f ON b.flight_id = f.id
       WHERE b.passport_number = $1 AND b.email = $2`,
      [passport, email]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Create booking
app.post("/api/bookings", async (req, res) => {
  const { flight_id, full_name, passport_number, email, passengers } = req.body;

  if (!flight_id || !full_name || !passport_number || !email || !passengers) {
    return res.status(400).json({ error: "Missing booking fields" });
  }

  try {
    await pool.query(
      `INSERT INTO bookings (flight_id, full_name, passport_number, email, seats)
       VALUES ($1, $2, $3, $4, $5)`,
      [flight_id, full_name, passport_number, email, passengers]
    );

    await pool.query(
      `UPDATE flights SET empty_seats = empty_seats - $2 WHERE id = $1 AND empty_seats >= $2`,
      [flight_id, passengers]
    );

    res.status(201).json({ message: "Booking successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = app;
