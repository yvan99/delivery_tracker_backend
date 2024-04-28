const Vehicle = require('../models/Vehicle');

exports.createVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).send(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).send(vehicles);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getVehicleById = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).send();
    }
    res.status(200).send(vehicle);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!vehicle) {
      return res.status(404).send();
    }
    res.status(200).send(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).send();
    }
    res.status(200).send(vehicle);
  } catch (error) {
    res.status(500).send(error);
  }
};
