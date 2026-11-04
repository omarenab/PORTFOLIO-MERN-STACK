const Services = require("../models/Services");

const getServices = async (req, res) => {
  try {
    const services = await Services.find();
    res
      .status(200)
      .json({ message: `Services fetched successfully `, services });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addService = async (req, res) => {
  try {
    const { title,icon } = req.body;
    const newService = await Services.create({ title,icon });
    res.status(201).json({ message: "Service has been added", newService });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const removeService = async (req, res) => {
  try {
    const service = await Services.findByIdAndDelete(req.params.id);
    res.status(204).json(`${service} has been deleted !`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { getServices, addService, removeService };
