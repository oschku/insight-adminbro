const mongoose = require('mongoose');
const { Schema } = mongoose;


const Coupons = new Schema({
    userId: { 
        type: String,
        required: true
    },
    goldCoupons: Number,
    silverCoupons: Number,
    bronzeCoupons: Number
  }, { timestamps: true });
  
  module.exports = mongoose.model("Coupons", Coupons);
  