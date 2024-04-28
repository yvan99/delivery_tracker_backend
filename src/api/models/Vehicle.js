const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  status: { type: String, default: 'active' },
  currentLocation: {
    longitude: Number,
    latitude: Number
  }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
