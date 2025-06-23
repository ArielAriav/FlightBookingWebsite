CREATE TABLE IF NOT EXISTS flights (
  id SERIAL PRIMARY KEY,
  from_city VARCHAR(100),
  to_city VARCHAR(100),
  flight_date DATE,
  flight_time TIME,
  empty_seats INTEGER
);

CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  flight_id INTEGER REFERENCES flights(id),
  full_name VARCHAR(255),
  passport_number VARCHAR(50),
  email VARCHAR(255),
  booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  seats INTEGER
);


INSERT INTO flights (from_city, to_city, flight_date, flight_time, empty_seats)
VALUES 
('Tel Aviv', 'London', '2025-07-01', '10:00:00', 100),
('Paris', 'Berlin', '2025-07-02', '15:00:00', 50)
ON CONFLICT DO NOTHING;
