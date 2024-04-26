const Location = require("../models/Location");

exports.createLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    await location.save();
    res.status(201).send(location);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).send(locations);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).send();
    }
    res.status(200).send(location);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!location) {
      return res.status(404).send();
    }
    res.status(200).send(location);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findByIdAndDelete(req.params.id);
    if (!location) {
      return res.status(404).send();
    }
    res.status(200).send(location);
  } catch (error) {
    res.status(500).send(error);
  }
};
