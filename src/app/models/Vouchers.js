const mongoose = require('mongoose');
const { Schema } = mongoose;


const Vouchers = new Schema({
    name: { 
        type: String,
        required: true
    },
    benefitType:  { 
        type: String,
        required: true
    },
    benefitValue: { 
        type: Number,
        required: true
    },
    voucherId: { 
        type: String,
        required: true
    },
    userId: { 
        type: String,
        required: true
    },
    partnerId: { 
        type: String,
        required: true
    },
    qrCode:{
        type: String,
        required: true
    },
    dateStart: Date,
    valid: Date,
    description: String,
    redeemed: Boolean,
    redeemDate: Date,
  }, { timestamps: true });
  
  module.exports = mongoose.model("Vouchers", Vouchers);
  