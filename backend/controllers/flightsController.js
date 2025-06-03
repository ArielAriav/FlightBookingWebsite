const getAllFlights = (req, res) => {
  const flights = [
    { id: 1, origin: 'TLV', destination: 'LHR', departure_time: '2025-06-07 14:00', price: 580.0 },
    { id: 2, origin: 'TLV', destination: 'JFK', departure_time: '2025-06-08 09:00', price: 950.0 },
  ];
  res.json(flights);
};

module.exports = { getAllFlights };
