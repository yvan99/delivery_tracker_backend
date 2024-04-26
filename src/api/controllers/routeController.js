const Route = require('../models/Route');

exports.createRoute = async (req, res) => {
  try {
    const route = new Route(req.body);
    await route.save();
    res.status(201).send(route);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllRoutes = async (req, res) => {
  try {
    const routes = await Route.find().populate('startLocationId endLocationId');
    res.status(200).send(routes);
  } catch (error) {
    res.status(500).send(error);
  }
};


exports.getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id).populate('startLocationId endLocationId');
    if (!route) {
      return res.status(404).send();
    }
    res.status(200).send(route);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!route) {
      return res.status(404).send();
    }
    res.status(200).send(route);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (!route) {
      return res.status(404).send();
    }
    res.status(200).send(route);
  } catch (error) {
    res.status(500).send(error);
  }
};
