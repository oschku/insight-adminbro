const mongoose = require('mongoose');
const { Schema } = mongoose;


const Boosts = new Schema({
    kyselyTitle: {
        type: String,
        required: true
    },
    surveyId: {
        type: Number,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
  }, { timestamps: true });
  
  module.exports = mongoose.model("Boosts", Boosts);
  