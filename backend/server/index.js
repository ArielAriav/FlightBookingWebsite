// server/index.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

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

app.post('/search', async (req, res) => {
  const { passport, email } = req.body;

  if (!passport || !email) {
    return res.status(400).json({ error: "Passport and email are required" });
  }

  try {
    const result = await pool.query(
      `SELECT b.id, b.full_name, b.passport_number, b.email, b.booking_time, f.from_city, f.to_city,
              f.flight_date, f.flight_time, f.airline
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

app.post("/api/bookings", async (req, res) => {
  const { flight_id, full_name, passport_number, email } = req.body;

  if (!flight_id || !full_name || !passport_number || !email) {
    return res.status(400).json({ error: "Missing booking fields" });
  }

  try {
    await pool.query(
      `INSERT INTO bookings (flight_id, full_name, passport_number, email)
       VALUES ($1, $2, $3, $4)`,
      [flight_id, full_name, passport_number, email]
    );

    // אפשר גם להפחית מושב ריק בטיסה
    await pool.query(
      `UPDATE flights SET empty_seats = empty_seats - 1 WHERE id = $1 AND empty_seats > 0`,
      [flight_id]
    );

    res.status(201).json({ message: "Booking successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
