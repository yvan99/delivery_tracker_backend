const Delivery = require('../models/Delivery');

exports.createDelivery = async (req, res) => {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.status(201).send(delivery);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate('vehicleId routeId');
    res.status(200).send(deliveries);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDeliveryById = async (req, res) => {
  try {
    const delivery = await Delivery.findById(req.params.id).populate('vehicleId routeId');
    if (!delivery) {
      return res.status(404).send();
    }
    res.status(200).send(delivery);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!delivery) {
      return res.status(404).send();
    }
    res.status(200).send(delivery);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteDelivery = async (req, res) => {
  try {
    const delivery = await Delivery.findByIdAndDelete(req.params.id);
    if (!delivery) {
      return res.status(404).send();
    }
    res.status(200).send({ message: 'Delivery successfully deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
};
