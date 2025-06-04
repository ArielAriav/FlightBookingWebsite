// server/index.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

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


// POST new booking
app.post('/bookings', async (req, res) => {
  const { flight_id, customer_name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO bookings (flight_id, customer_name, email) VALUES ($1, $2, $3) RETURNING *',
      [flight_id, customer_name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
