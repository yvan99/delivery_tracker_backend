const Location = require("../models/Location");

exports.createLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).send({ message: "Location created successfully", data: location });
  } catch (error) {
    res.status(400).send({ message: "Failed to create location", error: error.message });
  }
};

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).send({ message: "Locations retrieved successfully", data: locations });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving locations", error: error.message });
  }
};

exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).send({ message: "Location not found" });
    }
    res.status(200).send({ message: "Location retrieved successfully", data: location });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving location", error: error.message });
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!location) {
      return res.status(404).send({ message: "Location not found" });
    }
    res.status(200).send({ message: "Location updated successfully", data: location });
  } catch (error) {
    res.status(400).send({ message: "Failed to update location", error: error.message });
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).send({ message: "Location not found" });
    }
    res.status(200).send({ message: "Location deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Failed to delete location", error: error.message });
  }
};
