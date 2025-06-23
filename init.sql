CREATE TABLE IF NOT EXISTS flights (
  id SERIAL PRIMARY KEY,
  from_city TEXT NOT NULL,
  to_city TEXT NOT NULL,
  flight_date DATE NOT NULL,
  flight_time TEXT NOT NULL,
  empty_seats INTEGER NOT NULL
);

-- הכנסת 1000 טיסות רנדומליות עם שעה עגולה של רבע שעה
INSERT INTO flights (from_city, to_city, flight_date, flight_time, empty_seats)
SELECT 
  (ARRAY['Tel Aviv', 'New York', 'London', 'Paris', 'Tokyo', 'Berlin', 'Rome', 'Dubai', 'Bangkok', 'Istanbul'])[floor(random()*10)+1],
  (ARRAY['New York', 'London', 'Paris', 'Tokyo', 'Berlin', 'Rome', 'Dubai', 'Bangkok', 'Istanbul', 'Tel Aviv'])[floor(random()*10)+1],
  CURRENT_DATE + (floor(random()*365))::int,
  TO_CHAR(TIME '00:00' + make_interval(mins => 15 * floor(random() * 96)::int), 'HH24:MI'),
  floor(random()*200 + 10)::int
FROM generate_series(1, 1000);



CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  flight_id INTEGER REFERENCES flights(id),
  full_name VARCHAR(255),
  passport_number VARCHAR(50),
  email VARCHAR(255),
  booking_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  seats INTEGER
);