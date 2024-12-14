const mongoose = require('mongoose');
const paymentSchema = new mongoose.Schema({
  pid: {
    type: String,
    required: true,
    unique: true,
  },
  paymentId:{
    type: String,
    required: true,
    unique: true,

  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
