const Payprop = require("../models/Payprop");
// Create a new property tax record
exports.createPropertyTax = async (req, res) => {
  try {
    const randomTaxAmount = Math.floor(Math.random() * 1000);
    console.log(randomTaxAmount);
   
    const propertyTaxData = {
      ...req.body,
      taxAmount: randomTaxAmount,
    };


    const propertyTax = await Payprop.create(propertyTaxData);
    console.log(propertyTax);
    res.status(201).json(propertyTax);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
//Get a property tax record by ID
exports.getPropertyTaxById = async (req, res) => {
    try {
      const { pid } = req.body;
      console.log(pid);
      const propertyTax = await Payprop.findOne({ pid: pid });
      if (!propertyTax) {
        return res.status(404).json({ message: 'Property tax record not found' });
      }
      res.json(propertyTax);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// Get all property tax records
/*
exports.getAllPropertyTaxes = async (req, res) => {
  try {
    const propertyTaxes = await PropertyTax.find();
    res.json(propertyTaxes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update a property tax record by ID
exports.updatePropertyTax = async (req, res) => {
  try {
    const propertyTax = await PropertyTax.findOneAndUpdate(
      { pid: req.params.pid },
      req.body,
      { new: true }
    );
    if (!propertyTax) {
      return res.status(404).json({ message: 'Property tax record not found' });
    }
    res.json(propertyTax);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a property tax record by ID
exports.deletePropertyTax = async (req, res) => {
  try {
    const propertyTax = await PropertyTax.findOneAndDelete({ pid: req.params.pid });
    if (!propertyTax) {
      return res.status(404).json({ message: 'Property tax record not found' });
    }
    res.json({ message: 'Property tax record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/