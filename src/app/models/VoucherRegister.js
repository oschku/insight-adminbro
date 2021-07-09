const mongoose = require('mongoose');
const { Schema } = mongoose;


const VoucherRegister = new Schema({
    voucherId: { 
        type: String,
        required: true
    },
    partnerId: { 
        type: String,
        required: true
    },
    name: { 
        type: String,
        required: true
    },
    benefitType: { 
        type: String,
        required: true
    },
    benefitValue: { 
        type: Number,
        required: true
    },
    valueTotal: {
        type: Number,
    },
    totalUnits: {
        type: Number,
        required: true
    },
    totalUnitsRedeemed: {
        type: Number
    },
    dateStart: Date,
    valid: Date,
    description: String,    
  }, { timestamps: true });
  
  module.exports = mongoose.model("VoucherRegister", VoucherRegister);
  