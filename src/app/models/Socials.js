const mongoose = require('mongoose');
const { Schema } = mongoose;


const Socials = new Schema({
    socialId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    liked: {
        type: Boolean,
        required: true
    },
    shared:{
        type: Boolean,
        required: true
    },
    closed: {
        type: Boolean,
        required: true
    },
    expanded: {
        type: Boolean,
        required: true
    }
  }, { timestamps: true });
  
  module.exports = mongoose.model("Socials", Socials);
  