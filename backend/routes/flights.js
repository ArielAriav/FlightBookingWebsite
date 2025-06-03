const express = require('express');
const router = express.Router();
const { getAllFlights } = require('../controllers/flightsController');

router.get('/', getAllFlights);

module.exports = router;
