const express = require('express');
const router = express.Router();
const propertyTaxController = require('../controllers/Propertytaxcontrol');
// Route to create a new property tax record
router.post('/propertytax', propertyTaxController.createPropertyTax);

// Route to get a property tax record by ID
router.post('/getpropertytax', propertyTaxController.getPropertyTaxById);

// Route to get all property tax records
//router.get('/property-taxes', propertyTaxController.getAllPropertyTaxes);

// Route to update a property tax record by ID
//router.put('/property-tax/:pid', propertyTaxController.updatePropertyTax);

// Route to delete a property tax record by ID
//router.delete('/property-tax/:pid', propertyTaxController.deletePropertyTax);

module.exports = router;
