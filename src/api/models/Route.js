const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  startLocationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  endLocationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Location', required: true },
  waypoints: [{
    longitude: Number,
    latitude: Number
  }],
  distance: Number,
  duration: Number
});

module.exports = mongoose.model('Route', routeSchema);
