const mongoose = require('mongoose');
const { Schema } = mongoose;


const RouletteItems = new Schema({
    name: { 
        type: String,
        required: true
    },
    voucherId: { 
        type: String,
        required: true
    },
    couponType: {
        type: String,
        required: true
    },
    probability: {
        type: Number,
        required: true
    }
  }, { timestamps: true });
  
  module.exports = mongoose.model("RouletteItems", RouletteItems);
  