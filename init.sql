CREATE TABLE IF NOT EXISTS flights (
  id SERIAL PRIMARY KEY,
  from_city TEXT NOT NULL,
  to_city TEXT NOT NULL,
  flight_date DATE NOT NULL,
  flight_time TEXT NOT NULL,
  empty_seats INTEGER NOT NULL
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

-- הכנסת 1000 טיסות רנדומליות עם שעה עגולה של רבע שעה
INSERT INTO flights (from_city, to_city, flight_date, flight_time, empty_seats)
SELECT 
  fc AS from_city,
  tc AS to_city,
  CURRENT_DATE + (floor(random()*365))::int,
  TO_CHAR(TIME '00:00' + make_interval(mins => 15 * floor(random() * 96)::int), 'HH24:MI'),
  floor(random()*200 + 10)::int
FROM (
  SELECT 
    (ARRAY['TLV', 'TYO', 'ROM', 'PAR', 'BER', 'MAD', 'DXB', 'NYC', 'IST', 'LON'])[floor(random()*10)+1] AS fc,
    (ARRAY['TLV', 'TYO', 'ROM', 'PAR', 'BER', 'MAD', 'DXB', 'NYC', 'IST', 'LON'])[floor(random()*10)+1] AS tc
  FROM generate_series(1, 3000)
) AS flights_temp
WHERE fc <> tc
LIMIT 1000;

