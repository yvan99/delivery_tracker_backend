const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle', required: true },
  routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
  startTime: { type: Date, required: true },
  endTime: Date,
  status: { type: String, default: 'pending' },
  currentPosition: {
    location: {
      longitude: Number,
      latitude: Number
    },
    timestamp: Date,
    progress: Number
  }
});

module.exports = mongoose.model('Delivery', deliverySchema);
