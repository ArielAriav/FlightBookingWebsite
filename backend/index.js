const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const flightsRoutes = require('./routes/flights');
app.use('/flights', flightsRoutes);


app.get('/', (req, res) => {
  res.send('Flight Booking API is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
