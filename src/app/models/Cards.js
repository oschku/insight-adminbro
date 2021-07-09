const { Schema, model } = require("mongoose");

const Cards = new Schema({
    id: { 
        type: Number,
        required: true
    },
    name: { 
        type: String,
        required: true
    },
    picUrl: String,
    formTitle: String,
    formText: String,
    benefit: String,
    tyyppi:  { 
        type: String,
        required: true
    },
    dateStart: Date,
    valid: Date,
    description: String,
    benefitType: String,
    timestamp: Date,
    formContent: String,
    formUrl: String,
    resetHours: Number,
    minutes: Number,
    voucherId: Number,
  }, { timestamps: true });
  
  module.exports = model("Cards", Cards);
  