const mongoose = require('mongoose');
const { Schema } = mongoose;
const PropertyTaxSchema = new Schema({
  pid: { type:String , required: true, unique: true }, 
  // Unique identifier for the property
  name: { type: String, required: true }, // Name of the property owner

  phoneNumber: { type: Number, required: true }, // Contact phone number of the owner

  city: { type: String, required: true }, // City where the property is located

  locality: { type: String, required: true }, // Specific locality within the city
  taxAmount:{type:Number},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('payprop', PropertyTaxSchema);
