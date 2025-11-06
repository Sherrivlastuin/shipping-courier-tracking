const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  trackingNumber: { type: String, unique: true, required: true },
  sender: {
    name: String,
    address: String,
    contactNumber: String,
    email: String
  },
  recipient: {
    name: String,
    address: String,
    contactNumber: String,
    email: String
  },
  packageDetails: {
    goodsType: String,
    contentsDescription: String,
    weight: String,
    quantity: Number
  },
  serviceDetails: {
    shippingSpeed: { 
      type: String, 
      enum: ['local', 'standard', 'express', 'international', 'offshore'],
      default: 'standard'
    }
  },
  status: {
    type: String,
    enum: [
      'Processing',
      'In Transit',
      'Pending',
      'Undergoing custom clearance',
      'On hold',
      'Missing',
      'Delivered'
    ],
    default: 'Processing'
  },
  notes: String,
  history: [{
    status: String,
    note: String,
    changedAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Shipment', shipmentSchema);