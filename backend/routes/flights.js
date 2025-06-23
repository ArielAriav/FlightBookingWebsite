const express = require('express');
const router = express.Router();
const pool = require('../server/db');



router.get('/flights', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM flights WHERE (flight_date = CURRENT_DATE AND flight_time >= CURRENT_TIME) OR (flight_date > CURRENT_DATE)');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch flights' });
  }
});

module.exports = router;
