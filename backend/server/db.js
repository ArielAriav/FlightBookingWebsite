const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'flightsdb',
  password: 'password',
  port: 5432, // או 5433 אם שינית בדוקר
});

module.exports = pool;
