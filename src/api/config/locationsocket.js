const Vehicle = require("../models/Vehicle");

const KIGALI_BOUNDS = {
  north: -1.9241,
  south: -2.0006,
  west: 30.0307,
  east: 30.1498,
};

const updateVehicleLocations = async (wss, WebSocketOpen) => {
  const vehicles = await Vehicle.find();

  vehicles.forEach(async (vehicle) => {
    const latChange = Math.random() * 0.002 - 0.001;
    const lngChange = Math.random() * 0.002 - 0.001;

    let newLatitude = vehicle.currentLocation.latitude + latChange;
    let newLongitude = vehicle.currentLocation.longitude + lngChange;

    if (newLatitude < KIGALI_BOUNDS.south)
      newLatitude = KIGALI_BOUNDS.south + Math.random() * 0.001;
    if (newLatitude > KIGALI_BOUNDS.north)
      newLatitude = KIGALI_BOUNDS.north - Math.random() * 0.001;
    if (newLongitude < KIGALI_BOUNDS.west)
      newLongitude = KIGALI_BOUNDS.west + Math.random() * 0.001;
    if (newLongitude > KIGALI_BOUNDS.east)
      newLongitude = KIGALI_BOUNDS.east - Math.random() * 0.001;

    vehicle.currentLocation.latitude = newLatitude;
    vehicle.currentLocation.longitude = newLongitude;
    await vehicle.save();

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocketOpen) {
        client.send(
          JSON.stringify({
            id: vehicle._id,
            latitude: newLatitude,
            longitude: newLongitude,
          })
        );
      }
    });
  });
};

module.exports = updateVehicleLocations;
