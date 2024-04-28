const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  coordinates: {
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true }
  },
  type: { type: String, required: true }
});

module.exports = mongoose.model('Location', locationSchema);
