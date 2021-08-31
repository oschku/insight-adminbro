const mongoose = require('mongoose');
const { Schema } = mongoose;


const Faqs = new Schema({
    title: { 
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
  }, { timestamps: true });
  
  module.exports = mongoose.model("Faqs", Faqs);
  